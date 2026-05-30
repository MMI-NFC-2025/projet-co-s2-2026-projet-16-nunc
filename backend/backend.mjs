import PocketBase from 'pocketbase';

const pb =
    new PocketBase('http://127.0.0.1:8090');

export async function addContact(data) {
    return await pb.collection('contact').create(data);
}

export async function addNewUser(data) {
    return await pb.collection('users').create(data);
}

export async function getCurrentUser() {

    if (
        !pb.authStore.isValid
    ) {
        return null;
    }

    try {

        const user =
            await pb
                .collection('users')
                .getOne(
                    pb.authStore.record.id
                );

        return user;

    } catch {

        return null;

    }

}

export async function loginUser(
    email,
    password
) {

    return await pb
        .collection('users')
        .authWithPassword(
            email,
            password
        );

}

export function isAuthValid() {
    return pb.authStore.isValid;
}

export function clearAuth() {

    pb.authStore.clear();

    localStorage.clear();

    sessionStorage.clear();

}

export async function getBars() {

    return await pb
        .collection('bars')
        .getFullList({
            sort: '-created',
        });

}

export async function getImageUrl(record, imageField) {

    return pb
        .files
        .getURL(record, record[imageField]);

}

export async function getBarById(id) {

    try {

        let bar =
            await pb
                .collection('bars')
                .getOne(id);

        return bar;

    } catch (error) {

        console.error(
            'Error fetching bar by ID:',
            error
        );

        return null;

    }

}

export async function createSortie(data) {

    try {

        const sortie =
            await pb
                .collection('sorties')
                .create(data);

        return {
            success: true,
            sortie
        };

    } catch (error) {

        console.log(error);

        return {
            success: false,
            error: error
        };

    }

}

export async function addParticipantSortie(
    sortieId,
    utilisateurId,
    role = 'Organisateur',
    etat = 'Accepté'
) {

    return await pb
        .collection(
            'participants_sortie'
        )
        .create({
            sortie: sortieId,
            utilisateur: utilisateurId,
            role: role,
            etat: etat
        });

}

export async function getSortieById(id) {

    return await pb
        .collection('sorties')
        .getOne(id, {
            expand:
                'organisateur,bar'
        });

}

export async function getUserSorties(
    userId
) {

    return await pb
        .collection(
            'participants_sortie'
        )
        .getFullList({
            filter:
                `utilisateur="${userId}"`,
            expand:
                'sortie,sortie.bar,sortie.organisateur'
        });

}

export async function getAllSorties() {

    return await pb
        .collection(
            'participants_sortie'
        )
        .getFullList({
            expand:
                'sortie,sortie.bar,sortie.organisateur'
        });

}

export async function refreshCurrentUser() {

    const user =
        pb.authStore.record;

    if (!user) {
        return null;
    }

    return await pb
        .collection('users')
        .getOne(user.id);

}

export async function addUserPoints(
    userId,
    pointsToAdd
) {

    try {

        const user =
            await pb
                .collection('users')
                .getOne(userId);

        const currentPoints =
            user.points || 0;

        await pb
            .collection('users')
            .update(userId, {
                points:
                    currentPoints + pointsToAdd
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

    const level =
        getLevel(points);

    const currentLevelMin =
        (level - 1) * 250;

    const nextLevelMin =
        level * 250;

    const currentXp =
        points - currentLevelMin;

    const maxXp =
        nextLevelMin - currentLevelMin;

    const progress =
        (currentXp / maxXp) * 100;

    return {
        level,
        currentXp,
        maxXp,
        progress
    };

}