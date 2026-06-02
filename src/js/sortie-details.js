import {
    getCurrentUser,
    updateSortieById,
    deleteSortieCompletely,
    getUserFriends,
    createInvitation,
    getSortieParticipants,
    getFileUrl
} from '../../backend/backend.mjs';

const main = document.querySelector('[data-organisateur]');
const organisateurId = main?.dataset?.organisateur;

const currentUser = await getCurrentUser();

const panel = document.getElementById('organisateur-panel');

if (currentUser?.id === organisateurId) {
    panel?.classList.remove('hidden');
}

const saveBtn = document.getElementById('save-btn');
const deleteBtn = document.getElementById('delete-btn');
const sortieId = saveBtn?.dataset?.sortieId;

if (sortieId) {
    const participants = await getSortieParticipants(sortieId);
    const participantsList = document.getElementById('participants-list');
    const template = document.getElementById('participant-template');

    participants.forEach((participant) => {
        const card = template.cloneNode(true);
        card.id = '';
        card.classList.remove('hidden');

        card.querySelector('.participant-name').textContent =
            participant.expand?.utilisateur?.username || 'Utilisateur';

        card.querySelector('.participant-role').textContent =
            participant.role === 'Organisateur'
                ? '👑 Organisateur'
                : '🎉 Participant';

        const user = participant.expand?.utilisateur;

        card.querySelector('.participant-avatar').src =
            user?.avatar ? getFileUrl(user, user.avatar) : '';

        participantsList.appendChild(card);
    });

    template.remove();
}

if (saveBtn) {
    saveBtn.addEventListener('click', async () => {
        const sortieId = saveBtn.dataset.sortieId;

        const date = document.getElementById('date').value;
        const heure = document.getElementById('heure').value;

        const checkedBars = document.querySelectorAll('input[name="bar"]:checked');
        let bar = Array.from(checkedBars).map((input) => input.value);

        if (bar.length === 1) bar = bar[0];

        const data = { date, heure };
        if (bar) data.bar = bar;

        await updateSortieById(sortieId, data);

        window.location.href = '/sortie';
    });
}

const modal =
    document.getElementById('delete-modal');

const cancelDelete =
    document.getElementById('cancel-delete');

const confirmDelete =
    document.getElementById('confirm-delete');

let sortieToDelete = null;

if (
    deleteBtn &&
    modal &&
    cancelDelete &&
    confirmDelete
) {

    deleteBtn.addEventListener('click', () => {

        sortieToDelete =
            deleteBtn.dataset.sortieId;

        modal.classList.remove('hidden');
        modal.classList.add('flex');

    });

    cancelDelete.addEventListener('click', () => {

        modal.classList.add('hidden');
        modal.classList.remove('flex');

        sortieToDelete = null;

    });

    confirmDelete.addEventListener('click', async () => {

        if (!sortieToDelete) return;

        await deleteSortieCompletely(
            sortieToDelete
        );

        window.location.href = '/sortie';

    });

}

const radios = document.querySelectorAll('input[type="radio"][name="bar"]');

function updateRadioCards() {
    radios.forEach((radio) => {
        const card = radio.closest('label');

        if (radio.checked) {
            card.classList.add('border-paprika-c', 'bg-paprika-c', 'text-white');
            card.classList.remove('border-yellow-c', 'bg-white-bk', 'text-bordeaux-c');
        } else {
            card.classList.remove('border-paprika-c', 'bg-paprika-c', 'text-white');
            card.classList.add('border-yellow-c', 'bg-white-bk', 'text-bordeaux-c');
        }
    });
}

radios.forEach((radio) => {
    radio.addEventListener('change', updateRadioCards);
});

updateRadioCards();

const inviteBtn = document.getElementById('invite-btn');
const inviteModal = document.getElementById('invite-modal');
const closeInviteBtn = document.getElementById('close-invite-btn');
const sendInviteBtn = document.getElementById('send-invite-btn');
const usersList = document.getElementById('users-list');

if (inviteBtn && currentUser?.id === organisateurId) {
    inviteBtn.addEventListener('click', async () => {
        inviteModal.classList.remove('hidden');
        inviteModal.classList.add('flex');

        usersList.innerHTML = '';

        const friends = await getUserFriends(currentUser.id);

        if (friends.length === 0) {
            const message = document.createElement('p');
            message.textContent = "Vous n'avez aucun ami à inviter.";
            message.className = 'text-center text-bordeaux-c';
            usersList.appendChild(message);
            return;
        }

        friends.forEach((friend) => {
            const user =
                friend.utilisateur1 === currentUser.id
                    ? friend.expand.utilisateur2
                    : friend.expand.utilisateur1;

            const label = document.createElement('label');
            label.className = 'flex items-center gap-3 rounded-xl border border-yellow-c p-3';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = user.id;
            checkbox.className = 'invite-user';

            const span = document.createElement('span');
            span.textContent = user.username;

            label.appendChild(checkbox);
            label.appendChild(span);
            usersList.appendChild(label);
        });
    });
}

closeInviteBtn?.addEventListener('click', () => {
    inviteModal.classList.add('hidden');
    inviteModal.classList.remove('flex');
});

sendInviteBtn?.addEventListener('click', async () => {
    const sortieId = saveBtn.dataset.sortieId;

    const selectedUsers = document.querySelectorAll('.invite-user:checked');

    for (const userCheckbox of selectedUsers) {
        await createInvitation({
            expediteur: currentUser.id,
            destinataire: userCheckbox.value,
            sortie: sortieId,
            statut: 'en attente'
        });
    }

    inviteModal.classList.add('hidden');
    inviteModal.classList.remove('flex');
});
