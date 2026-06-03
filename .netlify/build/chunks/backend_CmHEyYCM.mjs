import PocketBase from 'pocketbase';

const pb = new PocketBase('https://pbnunc.linabenmabrouk.fr');

async function getBars() {
    return await pb.collection('bars').getFullList({ sort: 'created' });
}

async function getImageUrl(record, imageField) {
    return pb.files.getURL(record, record[imageField]);
}

async function getBarById(id) {
    try {
        return await pb.collection('bars').getOne(id);
    } catch (error) {
        console.error('Error fetching bar by ID:', error);
        return null;
    }
}

async function getSortieById(id) {
    try {
        return await pb.collection('sorties').getOne(id, {
            expand: 'organisateur,bar'
        });
    } catch {
        return null;
    }
}

async function getAbonnements() {
    return await pb.collection('abonnement').getFullList({
        expand: 'avantage'
    });
}

async function getAvantages() {
    return await pb.collection('avantages').getFullList({
        sort: 'created'
    });
}

async function getFaq() {
    return await pb.collection('faq').getFullList({
        sort: 'created'
    });
}

function getFileUrl(record, filename) {
    return pb.files.getURL(record, filename);
}

async function getUserById(id) {
    console.log('ID recherché :', id);
    return await pb.collection('users').getOne(id);
}

async function getNbSortiesParticipees(userId) {

    const result = await pb
        .collection('participants_sortie')
        .getFullList({
            filter: `utilisateur="${userId}"`
        });

    return result.length;

}

async function getNbSortiesOrganisees(userId) {

    const result = await pb
        .collection('sorties')
        .getFullList({
            filter: `organisateur="${userId}"`
        });

    return result.length;

}

async function getNbAmis(userId) {

    const result = await pb
        .collection('amis')
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

export { getNbSortiesParticipees as a, getNbSortiesOrganisees as b, getNbAmis as c, getFileUrl as d, getBars as e, getBarById as f, getUserById as g, getImageUrl as h, getAbonnements as i, getAvantages as j, getFaq as k, getSortieById as l };
