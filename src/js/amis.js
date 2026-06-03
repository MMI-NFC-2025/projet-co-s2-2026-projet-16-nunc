import { refreshCurrentUser, getUserFriends, getFriendRequests, getPendingFriends, searchUsers, sendFriendRequest, acceptFriendRequest, refuseFriendRequest, getFriendship, getFileUrl } from '../../backend/backend.mjs';

const user = await refreshCurrentUser();

const searchInput = document.getElementById('search-user');
const list = document.getElementById('friends-list');
const template = document.getElementById('user-template');

const tabFriends = document.getElementById('tab-friends');
const tabRequests = document.getElementById('tab-requests');
const tabPending = document.getElementById('tab-pending');

function getAvatar(record) {
    return record?.avatar ? getFileUrl(record, record.avatar) : '/default-avatar.png';
}

function activateTab(activeTab) {
    [tabFriends, tabRequests, tabPending].forEach((tab) => {
        tab.classList.remove('bg-paprika-c', 'text-white');
        tab.classList.add('bg-white-c', 'text-marron-c');
    });
    activeTab.classList.add('bg-paprika-c', 'text-white');
    activeTab.classList.remove('bg-white-c', 'text-marron-c');
}

function createCard(person, statusText, actionText, onClick) {
    const card = template.cloneNode(true);
    card.id = '';
    card.classList.remove('hidden');
    card.classList.add('flex');

    card.querySelector('.user-avatar').src = getAvatar(person);
    card.querySelector('.user-name').textContent = person.username;
    card.querySelector('.user-status').textContent = statusText;
    card.querySelector('.user-action').textContent = actionText;

    const refuseBtn = card.querySelector('.user-refuse');
    if (refuseBtn) refuseBtn.classList.add('hidden');

    card.addEventListener('click', () => {
        window.location.href = `/amis/${person.id}`;
    });

    card.querySelector('.user-action')?.addEventListener('click', (e) => e.stopPropagation());
    card.querySelector('.user-refuse')?.addEventListener('click', (e) => e.stopPropagation());

    if (onClick) card.querySelector('.user-action')?.addEventListener('click', onClick);

    list.appendChild(card);
}

async function showFriends() {
    activateTab(tabFriends);
    list.innerHTML = '';

    const friends = await getUserFriends(user.id);

    friends.forEach((friend) => {
        const ami = friend.utilisateur1 === user.id ? friend.expand.utilisateur2 : friend.expand.utilisateur1;
        createCard(ami, 'Ami(e)', 'Ami');
    });
}

async function showRequests() {
    activateTab(tabRequests);
    list.innerHTML = '';

    const requests = await getFriendRequests(user.id);

    requests.forEach((request) => {
        const sender = request.expand.utilisateur1;

        const card = template.cloneNode(true);
        card.id = '';
        card.classList.remove('hidden');
        card.classList.add('flex');

        card.querySelector('.user-avatar').src = getAvatar(sender);
        card.querySelector('.user-name').textContent = sender.username;
        card.querySelector('.user-status').textContent = 'Demande reçue';
        card.querySelector('.user-action').textContent = 'Accepter';

        const refuseBtn = card.querySelector('.user-refuse');
        refuseBtn.classList.remove('hidden');

        card.querySelector('.user-action').addEventListener('click', async () => {
            await acceptFriendRequest(request.id);
            showRequests();
        });

        refuseBtn.addEventListener('click', async (e) => {
            e.stopPropagation();
            await refuseFriendRequest(request.id);
            showRequests();
        });

        list.appendChild(card);
    });
}

async function showPending() {
    activateTab(tabPending);
    list.innerHTML = '';

    const pending = await getPendingFriends(user.id);

    pending.forEach((request) => {
        const receiver = request.expand.utilisateur2;
        createCard(receiver, 'Demande envoyée', 'En attente');
    });
}

searchInput.addEventListener('input', async () => {
    const value = searchInput.value.trim();

    if (value.length < 2) {
        showFriends();
        return;
    }

    list.innerHTML = '';

    const users = await searchUsers(value, user.id);

    for (const person of users) {
        const friendship = await getFriendship(user.id, person.id);
        if (friendship) continue;

        createCard(person, 'Utilisateur', 'Ajouter', async () => {
            await sendFriendRequest(user.id, person.id);
            showPending();
            searchInput.value = '';
        });
    }
});

tabFriends.addEventListener('click', showFriends);
tabRequests.addEventListener('click', showRequests);
tabPending.addEventListener('click', showPending);

showFriends();
