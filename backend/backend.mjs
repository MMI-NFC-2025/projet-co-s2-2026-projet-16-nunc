import PocketBase from 'pocketbase';

const pocketBaseUrl = 'https://pbnunc.linabenmabrouk.fr';
const pb = new PocketBase(pocketBaseUrl);

export function getPocketBase(client = pb) {
    return client || pb;
}

function collection(name, client = pb) {
    return getPocketBase(client).collection(name);
}

export function createServerPocketBase(request) {
    const serverPb = new PocketBase(pocketBaseUrl);
    serverPb.autoCancellation(false);
    serverPb.authStore.loadFromCookie(request.headers.get('cookie') || '');
    return serverPb;
}

export function createAuthCookie(serverPb) {
    return serverPb.authStore.exportToCookie({
        sameSite: 'Lax',
        secure: import.meta.env.PROD,
        path: '/',
        maxAge: 60 * 60 * 24 * 30
    });
}

export function createClearAuthCookie() {
    const secure = import.meta.env.PROD ? '; Secure' : '';
    return `pb_auth=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax${secure}`;
}

export async function loadAstroAuth(Astro) {
    if (Astro.locals.pb) {
        return {
            pb: Astro.locals.pb,
            user: Astro.locals.user || null
        };
    }

    const serverPb = createServerPocketBase(Astro.request);
    let user = null;

    if (serverPb.authStore.isValid) {
        try {
            const authData = await serverPb.collection('users').authRefresh();
            user = authData?.record || serverPb.authStore.record;
            Astro.response.headers.append('Set-Cookie', createAuthCookie(serverPb));
        } catch {
            serverPb.authStore.clear();
            Astro.response.headers.append('Set-Cookie', createClearAuthCookie());
        }
    }

    Astro.locals.pb = serverPb;
    Astro.locals.user = user;

    return { pb: serverPb, user };
}

export async function addContact(data, client = pb) {
    return await collection('contact', client).create(data);
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

    if (typeof localStorage !== 'undefined') {
        localStorage.removeItem('pb_auth');
    }

    if (typeof sessionStorage !== 'undefined') {
        sessionStorage.clear();
    }
}

export async function getBars(client = pb) {
    return await collection('bars', client).getFullList({ sort: 'created' });
}

export async function getImageUrl(record, imageField, client = pb) {
    if (!record || !record[imageField]) return '';
    return getPocketBase(client).files.getURL(record, record[imageField]);
}

export async function getBarById(id, client = pb) {
    try {
        return await collection('bars', client).getOne(id);
    } catch (error) {
        console.error('Error fetching bar by ID:', error);
        return null;
    }
}

export async function getUsersByIds(ids, client = pb) {
    if (!ids || ids.length === 0) return [];

    const filter = ids.map(id => `id="${id}"`).join(' || ');
    return await collection('users', client).getFullList({ filter });
}

export async function createSortie(data, client = pb) {
    try {
        const sortie = await collection('sorties', client).create(data);
        return { success: true, sortie };
    } catch (error) {
        return { success: false, error };
    }
}

export async function addParticipantSortie(sortieId, utilisateurId, role = 'Organisateur', etat = 'Accepté', client = pb) {
    return await collection('participants_sortie', client).create({
        sortie: sortieId,
        utilisateur: utilisateurId,
        role,
        etat
    });
}

export async function getSortieById(id, client = pb) {
    try {
        return await collection('sorties', client).getOne(id, {
            expand: 'organisateur,bar'
        });
    } catch {
        return null;
    }
}

export async function getUserSorties(userId, client = pb) {
    return await collection('participants_sortie', client).getFullList({
        sort: '-created',
        filter: `utilisateur="${userId}"`,
        expand: 'sortie,sortie.bar,sortie.organisateur'
    });
}

export async function getSortieParticipants(sortieId, client = pb) {
    return await collection('participants_sortie', client).getFullList({
        filter: `sortie="${sortieId}"`,
        expand: 'utilisateur'
    });
}

export async function getAllSorties(client = pb) {
    return await collection('participants_sortie', client).getFullList({
        expand: 'sortie,sortie.bar,sortie.organisateur'
    });
}

export async function updateSortieById(id, data, client = pb) {
    return await collection('sorties', client).update(id, data);
}

export async function deleteSortieCompletely(sortieId, client = pb) {
    const participations = await collection('participants_sortie', client).getFullList({
        filter: `sortie="${sortieId}"`
    });

    for (const participation of participations) {
        await collection('participants_sortie', client).delete(participation.id);
    }

    await collection('sorties', client).delete(sortieId);
}

export async function getAllUsers(client = pb) {
    return await collection('users', client).getFullList({ sort: 'username' });
}

export async function createInvitation(data, client = pb) {
    const existingInvitation = await collection('invitations', client)
        .getFirstListItem(
            `sortie="${data.sortie}" && destinataire="${data.destinataire}"`,
            { requestKey: null }
        )
        .catch(() => null);

    if (existingInvitation) return null;

    return await collection('invitations', client).create(data);
}

export async function getUserInvitations(userId, client = pb) {
    return await collection('invitations', client).getFullList({
        filter: `destinataire="${userId}" && statut="en attente"`,
        expand: 'sortie,expediteur,destinataire'
    });
}

export async function acceptInvitation(invitationId, client = pb) {
    return await collection('invitations', client).update(invitationId, {
        statut: 'acceptee'
    });
}

export async function refuseInvitation(invitationId, client = pb) {
    return await collection('invitations', client).update(invitationId, {
        statut: 'refusee'
    });
}

export async function getUserFriends(userId, client = pb) {
    return await collection('amis', client).getFullList({
        filter: `statut="Accepter" && (utilisateur1="${userId}" || utilisateur2="${userId}")`,
        expand: 'utilisateur1,utilisateur2'
    });
}

export async function refreshCurrentUser(client = pb) {
    const db = getPocketBase(client);
    const user = db.authStore.record;
    if (!user) return null;
    return await collection('users', db).getOne(user.id);
}

export async function addUserPoints(userId, pointsToAdd, client = pb) {
    try {
        const user = await collection('users', client).getOne(userId);
        const currentPoints = user.points || 0;
        const nextPoints = Math.max(0, currentPoints + pointsToAdd);

        await collection('users', client).update(userId, {
            points: nextPoints,
            niveau: getLevel(nextPoints)
        });

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function createRetourProgramme(data, client = pb) {
    return await collection('retours_programmes', client).create(data);
}

export function getLevel(points) {
    return Math.max(1, Math.floor((points || 0) / 250) + 1);
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

export async function getAbonnements(client = pb) {
    return await collection('abonnement', client).getFullList({
        expand: 'avantage'
    });
}

export async function activatePremium(userId, client = pb) {
    return await collection('users', client).update(userId, {
        premium: true
    });
}

export async function getAvantages(client = pb) {
    return await collection('avantages', client).getFullList({
        sort: 'created'
    });
}

export async function getFaq(client = pb) {
    return await collection('faq', client).getFullList({
        sort: 'created'
    });
}

export function getFileUrl(record, filename, client = pb) {
    if (!record || !filename) return '';
    return getPocketBase(client).files.getURL(record, filename);
}

export async function getQuestionsSobriete(client = pb) {
    return await collection('questions_sobriete', client).getFullList({
        sort: 'ordre'
    });
}

export async function searchUsers(username, currentUserId, client = pb) {
    const term = String(username || '').replaceAll('"', '\\"');

    return await collection('users', client).getFullList({
        filter: `username ~ "${term}" && id != "${currentUserId}"`,
        sort: 'username'
    });
}

export async function getFriendRequests(userId, client = pb) {
    return await collection('amis', client).getFullList({
        filter: `statut="En attente" && utilisateur2="${userId}"`,
        expand: 'utilisateur1,utilisateur2'
    });
}

export async function getPendingFriends(userId, client = pb) {
    return await collection('amis', client).getFullList({
        filter: `statut="En attente" && utilisateur1="${userId}"`,
        expand: 'utilisateur1,utilisateur2'
    });
}

export async function sendFriendRequest(userId, friendId, client = pb) {
    const existing = await collection('amis', client)
        .getFirstListItem(
            `(utilisateur1="${userId}" && utilisateur2="${friendId}") || (utilisateur1="${friendId}" && utilisateur2="${userId}")`,
            { requestKey: null }
        )
        .catch(() => null);

    if (existing) return null;

    return await collection('amis', client).create({
        utilisateur1: userId,
        utilisateur2: friendId,
        statut: 'En attente'
    });
}

export async function acceptFriendRequest(friendshipId, client = pb) {
    return await collection('amis', client).update(friendshipId, {
        statut: 'Accepter'
    });
}

export async function refuseFriendRequest(friendshipId, client = pb) {
    return await collection('amis', client).update(friendshipId, {
        statut: 'Refuser'
    });
}

export async function getFriendship(userId, otherUserId, client = pb) {
    return await collection('amis', client)
        .getFirstListItem(
            `(utilisateur1="${userId}" && utilisateur2="${otherUserId}") || (utilisateur1="${otherUserId}" && utilisateur2="${userId}")`,
            { requestKey: null }
        )
        .catch(() => null);
}

export async function getUserById(id, client = pb) {
    return await collection('users', client).getOne(id);
}

export async function getNbSortiesParticipees(userId, client = pb) {

    const result = await collection('participants_sortie', client)
        .getFullList({
            filter: `utilisateur="${userId}"`
        });

    return result.length;

}

export async function getNbSortiesOrganisees(userId, client = pb) {

    const result = await collection('sorties', client)
        .getFullList({
            filter: `organisateur="${userId}"`
        });

    return result.length;

}

export async function getNbAmis(userId, client = pb) {

    const result = await collection('amis', client)
        .getFullList({
            filter: `
                statut="Accepter"
                &&
                (
                    utilisateur1="${userId}"
                    ||
                    utilisateur2="${userId}"
                )
            `
        });

    return result.length;

}

export async function updateAvatar(userId, file, client = pb) {
    return await collection('users', client).update(userId, {
        avatar: file
    });
}

export async function getCadres(client = pb) {

    return await getPocketBase(client)
        .collection('cadres')
        .getFullList({
            sort: 'prix'
        });

}

export async function acheterCadre(userId, cadreId, client = pb) {

    const user =
        await getPocketBase(client)
            .collection('users')
            .getOne(userId);

    const cadre =
        await getPocketBase(client)
            .collection('cadres')
            .getOne(cadreId);

    const prixCadre =
        user.premium
            ? Math.ceil(cadre.prix * 0.8)
            : cadre.prix;

    if (
        user.points <
        prixCadre
    ) {
        throw new Error(
            'Pas assez de points'
        );
    }

    const dejaPossede =
        await getPocketBase(client)
            .collection(
                'inventaire_cadres'
            )
            .getFullList({
                filter:
                    `utilisateur="${userId}" && cadre="${cadreId}"`
            });

    if (
        dejaPossede.length > 0
    ) {
        throw new Error(
            'Cadre déjà possédé'
        );
    }

    const nextPoints =
        user.points -
        prixCadre;

    await getPocketBase(client)
        .collection('users')
        .update(
            userId,
            {
                points:
                    nextPoints,
                niveau:
                    getLevel(nextPoints)
            }
        );

    await getPocketBase(client)
        .collection(
            'inventaire_cadres'
        )
        .create({
            utilisateur:
                userId,
            cadre:
                cadreId,
            equipe:
                false
        });

}

export async function getCadresUtilisateur(
    userId,
    client = pb
) {

    return await getPocketBase(client)
        .collection(
            'inventaire_cadres'
        )
        .getFullList({
            filter:
                `utilisateur="${userId}"`,
            expand:
                'cadre,cadre_premium'
        });

}

export async function getCadreEquipeUtilisateur(userId, client = pb) {
    return await getPocketBase(client)
        .collection('inventaire_cadres')
        .getFirstListItem(
            `utilisateur="${userId}" && equipe=true`,
            {
                expand: 'cadre,cadre_premium',
                requestKey: null
            }
        )
        .catch(() => null);
}

export async function equiperCadreUtilisateur(userId, inventaireId, client = pb) {
    const inventaire = await getCadresUtilisateur(userId, client);
    const selected = inventaire.find((item) => item.id === inventaireId);

    if (!selected) {
        throw new Error('Cadre introuvable');
    }

    for (const item of inventaire) {
        await getPocketBase(client)
            .collection('inventaire_cadres')
            .update(item.id, {
                equipe: item.id === inventaireId
            });
    }

    return true;
}

export async function getCadresPremium(client = pb) {

    return await getPocketBase(client)
        .collection(
            'cadres_premium'
        )
        .getFullList();

}

export async function obtenirCadrePremium(
    userId,
    cadrePremiumId,
    client = pb
) {

    const dejaPossede =
        await getPocketBase(client).collection(
            'inventaire_cadres'
        ).getFirstListItem(
            `utilisateur="${userId}" && cadre_premium="${cadrePremiumId}"`
        ).catch(
            () => null
        );

    if (dejaPossede) {
        throw new Error(
            'Cadre déjà possédé'
        );
    }

    await getPocketBase(client).collection(
        'inventaire_cadres'
    ).create({
        utilisateur: userId,
        cadre_premium: cadrePremiumId,
        equipe: false
    });

}

export async function getCadresExclusifs(client = pb) {

    return await getPocketBase(client).collection(
        'cadres_exclusifs'
    ).getFullList({
        sort: 'nom'
    });

}
