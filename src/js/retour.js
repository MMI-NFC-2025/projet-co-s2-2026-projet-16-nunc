import {
    createRetourProgramme,
    getCurrentUser,
    getUserFriends,
    getFileUrl
} from '../../backend/backend.mjs';

const samCard = document.getElementById('sam-card');
const taxiCard = document.getElementById('taxi-card');
const vtcCard = document.getElementById('vtc-card');

const samContainer = document.getElementById('sam-container');
const template = document.getElementById('friend-template');
const friendsList = document.getElementById('friends-list');

taxiCard.addEventListener('click', async () => {
    const user = getCurrentUser();

    await createRetourProgramme({
        utilisateur: user.id,
        type_retour: 'Taxi'
    });

    window.location.href = '/';
});

vtcCard.addEventListener('click', async () => {
    const user = getCurrentUser();

    await createRetourProgramme({
        utilisateur: user.id,
        type_retour: 'VTC'
    });

    window.location.href = '/';
});

samCard.addEventListener('click', async () => {
    samContainer.classList.remove('hidden');

    const user = getCurrentUser();
    const friends = await getUserFriends(user.id);

    friendsList.innerHTML = '';

    friends.forEach((friend) => {
        const ami =
            friend.utilisateur1 === user.id
                ? friend.expand.utilisateur2
                : friend.expand.utilisateur1;

        const card = template.cloneNode(true);
        card.id = '';
        card.classList.remove('hidden');
        card.classList.add('flex');

        card.querySelector('.friend-username').textContent = ami.username;

        const avatar = card.querySelector('.friend-avatar');
        avatar.src = ami.avatar ? getFileUrl(ami, ami.avatar) : '';
        avatar.alt = ami.username;

        card.addEventListener('click', async () => {
            await createRetourProgramme({
                utilisateur: user.id,
                type_retour: 'SAM',
                conducteur_sam: ami.id
            });

            window.location.href = '/';
        });

        friendsList.appendChild(card);
    });
});
