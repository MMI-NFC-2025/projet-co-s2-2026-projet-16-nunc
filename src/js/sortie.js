import { refreshCurrentUser, getUserSorties,  getUsersByIds, getUserInvitations, acceptInvitation, refuseInvitation, addParticipantSortie } from '../../backend/backend.mjs';

const user = await refreshCurrentUser();

const container = document.getElementById('sorties-container');
const template = document.getElementById('sortie-template');

const tabEvents = document.getElementById('tab-events');
const tabHistory = document.getElementById('tab-history');
const tabInvitations = document.getElementById('tab-invitations');

function activateTab(activeTab) {
    [tabEvents, tabHistory, tabInvitations].forEach((tab) => {
        tab.classList.remove('bg-paprika-c', 'text-white');
    });
    activeTab.classList.add('bg-paprika-c', 'text-white');
}

function getDateSortie(sortie) {
    const date = sortie.date.substring(0, 10);
    return new Date(`${date}T${sortie.heure}`);
}

function afficherSorties(participations, organiserMap) {
    container.innerHTML = '';

    participations.forEach((participation) => {
        const sortie = participation?.expand?.sortie;
        if (!sortie) return;

        const expandedOrganisateur = sortie?.expand?.organisateur;
        const rawOrganisateurId = sortie?.organisateur;

        const organiserId = Array.isArray(rawOrganisateurId)
            ? rawOrganisateurId[0]
            : rawOrganisateurId;

        const organisateur = expandedOrganisateur || organiserMap.get(organisateurId);

        const avatarUrl = organisateur?.avatar
            ? `http://127.0.0.1:8090/api/files/${organisateur.collectionId}/${organisateur.id}/${organisateur.avatar}`
            : '';

        const bars = sortie?.expand?.bar;

        const card = template.cloneNode(true);
        card.id = '';
        card.classList.remove('hidden');

        const avatarEl = card.querySelector('.sortie-avatar');

        if (avatarUrl) {
            avatarEl.src = avatarUrl;
            avatarEl.alt = `${organisateur?.username || 'Organisateur'} avatar`;
        } else {
            avatarEl.removeAttribute('src');
            avatarEl.alt = 'Photo de l’organisateur indisponible';
        }

        card.querySelector('.sortie-title').textContent = sortie.titre || '';
        card.querySelector('.sortie-organisateur').textContent = organisateur?.username || 'Utilisateur';

        const date = new Date(sortie.date);
        const dateFormatee = date.toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });

        card.querySelector('.sortie-date').textContent =
            `${dateFormatee} à ${sortie.heure.replace(':', 'h')}`;

        if (sortie.type === 'barcrawl' || sortie.type === 'bar crawl') {
            card.querySelector('.sortie-bar').textContent = 'Bar Crawl';
        } else {
            card.querySelector('.sortie-bar').textContent = bars?.[0]?.nom || 'Bar';
        }

        card.querySelector('.sortie-participants').textContent =
            `${sortie.participants || 0} participants`;

        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            window.location.href = `/sortie/${sortie.id}`;
        });

        container.appendChild(card);
    });
}

if (user) {
    const participations = await getUserSorties(user.id);

    const organiserIds = [
        ...new Set(
            participations
                .map((p) => p?.expand?.sortie?.organisateur)
                .filter(Boolean)
        )
    ];

    const organisers = organiserIds.length > 0
        ? await getUsersByIds(organiserIds)
        : [];

    const organiserMap = new Map(
        organisers.map((organisateur) => [organisateur.id, organisateur])
    );

    const maintenant = new Date();

    const sortiesActives = participations.filter((p) => {
        const sortie = p?.expand?.sortie;
        if (!sortie) return false;
        return getDateSortie(sortie) >= maintenant;
    });

    const sortiesPassees = participations.filter((p) => {
        const sortie = p?.expand?.sortie;
        if (!sortie) return false;
        return getDateSortie(sortie) < maintenant;
    });

    if (sortiesActives.length === 0) {
        document.getElementById('sorties-empty')?.classList.remove('hidden');
    }

    afficherSorties(sortiesActives, organiserMap);

    tabEvents?.addEventListener('click', () => {
        activateTab(tabEvents);
        invitationsContainer.classList.add('hidden');
        container.classList.remove('hidden');
        afficherSorties(sortiesActives, organiserMap);
    });

    tabHistory?.addEventListener('click', () => {
        activateTab(tabHistory);
        invitationsContainer.classList.add('hidden');
        container.classList.remove('hidden');
        afficherSorties(sortiesPassees, organiserMap);
    });

    tabInvitations?.addEventListener('click', () => {
        activateTab(tabInvitations);
        container.classList.add('hidden');
        invitationsContainer.classList.remove('hidden');
    });
}

template.remove();

const invitationsContainer = document.getElementById('invitations-container');
const invitationTemplate = document.getElementById('invitation-template');

if (invitationsContainer && invitationTemplate && user) {
    const invitations = await getUserInvitations(user.id);

    invitations.forEach((invitation) => {
        const card = invitationTemplate.cloneNode(true);
        card.id = '';
        card.classList.remove('hidden');

        card.querySelector('.invitation-title').textContent =
            invitation.expand?.sortie?.titre || 'Sortie';

        card.querySelector('.invitation-expediteur').textContent =
            invitation.expand?.expediteur?.username ||
            invitation.expand?.expediteur?.email ||
            'Utilisateur';

        const acceptBtn = card.querySelector('.accept-btn');
        const refuseBtn = card.querySelector('.refuse-btn');

        acceptBtn?.addEventListener('click', async (event) => {
            event.stopPropagation();

            await addParticipantSortie(
                invitation.sortie,
                user.id,
                'Participant',
                'Accepté'
            );

            await acceptInvitation(invitation.id);
            window.location.reload();
        });

        refuseBtn?.addEventListener('click', async (event) => {
            event.stopPropagation();
            await refuseInvitation(invitation.id);
            window.location.reload();
        });

        invitationsContainer.appendChild(card);
    });

    invitationTemplate.remove();
}