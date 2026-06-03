import { refreshCurrentUser, getFileUrl, getNbSortiesParticipees, 
    getNbSortiesOrganisees, getNbAmis, updateAvatar 
} from '../../backend/backend.mjs';

const user = await refreshCurrentUser();
if (!user) window.location.href = '/connexion';

const points = user.points || 0;
const niveau = Math.floor(points / 250) + 1;
const maxXp = niveau * 250;
const currentXp = points;
const progress = (currentXp / maxXp) * 100;

const dateInscription = new Date(user.created).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });

const nbSorties = await getNbSortiesParticipees(user.id);
const nbOrganisations = await getNbSortiesOrganisees(user.id);
const nbAmis = await getNbAmis(user.id);

document.getElementById('avatar').src = getFileUrl(user, user.avatar);
document.getElementById('username').textContent = user.username;
document.getElementById('date-inscription').textContent = `Membre depuis ${dateInscription}`;
document.getElementById('niveau').textContent = `Niveau ${niveau}`;
document.getElementById('points').textContent = `${currentXp} / ${maxXp} points`;
document.getElementById('progress-bar').style.width = `${progress}%`;
document.getElementById('nb-sorties').textContent = nbSorties;
document.getElementById('nb-organisations').textContent = nbOrganisations;
document.getElementById('nb-amis').textContent = nbAmis;

const premiumBadge = document.getElementById('premium-badge');
if (user.premium) {
    premiumBadge.classList.remove('hidden');
    premiumBadge.classList.add('flex');
}

const avatarInput = document.getElementById('avatar-input');
avatarInput?.addEventListener('change', async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    await updateAvatar(user.id, file);
    document.getElementById('avatar').src = URL.createObjectURL(file);
    location.reload();
});
