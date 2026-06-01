import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export async function addContact(data) {
    return await pb.collection('contact').create(data);
}

export async function addNewUser(data) {
    return await pb.collection('users').create(data);
}

export function getCurrentUser() {

    return pb.authStore.record || null;

}

export async function loginUser(email, password) {
    return await pb.collection('users').authWithPassword(email, password);
}

export function isAuthValid() {
    return pb.authStore.isValid;
}

export function clearAuth() {
    pb.authStore.clear();
    localStorage.removeItem('pb_auth');
    sessionStorage.clear();
}

export async function getBars() {
    return await pb.collection('bars').getFullList({ sort: 'created' });
}

export async function getImageUrl(record, imageField) {
    return pb.files.getURL(record, record[imageField]);
}

export async function getBarById(id) {
    try {
        return await pb.collection('bars').getOne(id);
    } catch (error) {
        console.error('Error fetching bar by ID:', error);
        return null;
    }
}

export async function getUsersByIds(ids) {
    if (!ids || ids.length === 0) return [];

    const filter = ids.map(id => `id="${id}"`).join(' || ');
    let users = await pb.collection('users').getFullList({ filter });

    if (users.length === 0) {
        users = await pb.collection('_pb_users_auth_').getFullList({ filter });
    }

    return users;
}

export async function createSortie(data) {
    try {
        const sortie = await pb.collection('sorties').create(data);
        return { success: true, sortie };
    } catch (error) {
        return { success: false, error };
    }
}

export async function addParticipantSortie(sortieId, utilisateurId, role = 'Organisateur', etat = 'Accepté') {
    return await pb.collection('participants_sortie').create({
        sortie: sortieId,
        utilisateur: utilisateurId,
        role,
        etat
    });
}

export async function getSortieById(id) {
    try {
        return await pb.collection('sorties').getOne(id, {
            expand: 'organisateur,bar'
        });
    } catch {
        return null;
    }
}

export async function getUserSorties(userId) {
    return await pb.collection('participants_sortie').getFullList({
        sort: '-created',
        filter: `utilisateur="${userId}"`,
        expand: 'sortie,sortie.bar,sortie.organisateur'
    });
}

export async function getSortieParticipants(sortieId) {
    return await pb.collection('participants_sortie').getFullList({
        filter: `sortie="${sortieId}"`,
        expand: 'utilisateur'
    });
}

export async function getAllSorties() {
    return await pb.collection('participants_sortie').getFullList({
        expand: 'sortie,sortie.bar,sortie.organisateur'
    });
}

export async function updateSortieById(id, data) {
    return await pb.collection('sorties').update(id, data);
}

export async function deleteSortieCompletely(sortieId) {
    const participations = await pb.collection('participants_sortie').getFullList({
        filter: `sortie="${sortieId}"`
    });

    for (const participation of participations) {
        await pb.collection('participants_sortie').delete(participation.id);
    }

    await pb.collection('sorties').delete(sortieId);
}

export async function getAllUsers() {
    return await pb.collection('users').getFullList({ sort: 'username' });
}

export async function createInvitation(data) {
    const existingInvitation = await pb
        .collection('invitations')
        .getFirstListItem(`sortie="${data.sortie}" && destinataire="${data.destinataire}"`, {
            requestKey: null
        })
        .catch(() => null);

    if (existingInvitation) return null;

    return await pb.collection('invitations').create(data);
}

export async function getUserInvitations(userId) {
    return await pb.collection('invitations').getFullList({
        filter: `destinataire="${userId}" && statut="en attente"`,
        expand: 'sortie,expediteur,destinataire'
    });
}

export async function acceptInvitation(invitationId) {
    return await pb.collection('invitations').update(invitationId, { statut: 'acceptee' });
}

export async function refuseInvitation(invitationId) {
    return await pb.collection('invitations').update(invitationId, { statut: 'refusee' });
}

export async function getUserFriends(userId) {
    return await pb.collection('amis').getFullList({
        filter: `statut="Accepter" && (utilisateur1="${userId}" || utilisateur2="${userId}")`,
        expand: 'utilisateur1,utilisateur2'
    });
}

export async function refreshCurrentUser() {
    const user = pb.authStore.record;
    if (!user) return null;
    return await pb.collection('users').getOne(user.id);
}

export async function addUserPoints(userId, pointsToAdd) {
    try {
        const user = await pb.collection('users').getOne(userId);
        const currentPoints = user.points || 0;

        await pb.collection('users').update(userId, {
            points: currentPoints + pointsToAdd
        });

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export function getLevel(points) {
    return Math.floor(points / 250) + 1;
}

export function getLevelData(points) {
    const level = getLevel(points);
    const currentLevelMin = (level - 1) * 250;
    const nextLevelMin = level * 250;
    const currentXp = points - currentLevelMin;
    const maxXp = nextLevelMin - currentLevelMin;
    const progress = (currentXp / maxXp) * 100;

    return { level, currentXp, maxXp, progress };
}