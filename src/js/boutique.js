import { refreshCurrentUser, getCadres, getFileUrl, acheterCadre,
    getCadresUtilisateur, getCadresPremium, obtenirCadrePremium, 
    getCadresExclusifs 
} from '../../backend/backend.mjs';

function afficherMessage(texte, erreur = true) {
    const message = document.getElementById('message');
    message.textContent = texte;
    message.classList.remove('hidden');

    if (erreur) {
        message.classList.remove('bg-green-600');
        message.classList.add('bg-paprika-c');
    } else {
        message.classList.remove('bg-paprika-c');
        message.classList.add('bg-green-600');
    }

    setTimeout(() => {
        message.classList.add('hidden');
    }, 3000);
}

const cadres = await getCadres();
const user = await refreshCurrentUser();

if (!user) window.location.href = '/connexion';

const inventaire = await getCadresUtilisateur(user.id);
const cadresPremium = await getCadresPremium();

const points = user.points || 0;
const niveau = Math.floor(points / 250) + 1;
const maxXp = niveau * 250;
const currentXp = points;
const progress = (currentXp / maxXp) * 100;

document.getElementById('niveau').textContent = `Niveau ${niveau}`;
document.getElementById('points').textContent = `${currentXp} / ${maxXp} points`;
document.getElementById('progress-bar').style.width = `${progress}%`;

if (user.premium) {
    const premiumBadge = document.getElementById('premium-badge');
    premiumBadge.classList.remove('hidden');
    premiumBadge.classList.add('flex');
}

const cadresList = document.getElementById('cadres-list');
const template = document.getElementById('cadre-template');

cadres.forEach((cadre) => {
    const card = template.cloneNode(true);
    card.id = '';
    card.classList.remove('hidden');

    card.querySelector('.cadre-image').src = getFileUrl(cadre, cadre.image);
    card.querySelector('.cadre-nom').textContent = cadre.nom;
    card.querySelector('.cadre-prix').textContent = `${cadre.prix} pts`;

    const bouton = card.querySelector('.cadre-bouton');
    const possede = inventaire.some((item) => item.cadre === cadre.id);

    if (possede) {
        bouton.textContent = 'Possédé';
        bouton.disabled = true;
        bouton.classList.remove('bg-paprika-c');
        bouton.classList.add('bg-beige-c');
    } else {
        bouton.addEventListener('click', async () => {
            try {
                await acheterCadre(user.id, cadre.id);
                location.reload();
            } catch (error) {
                afficherMessage(error.message);
            }
        });
    }

    cadresList.appendChild(card);
});

const premiumList = document.getElementById('cadres-premium-list');
const premiumTemplate = document.getElementById('cadre-premium-template');

cadresPremium.forEach((cadre) => {
    const card = premiumTemplate.cloneNode(true);
    card.id = '';
    card.classList.remove('hidden');

    card.querySelector('.cadre-premium-image').src = getFileUrl(cadre, cadre.image);
    card.querySelector('.cadre-premium-nom').textContent = cadre.nom;

    const bouton = card.querySelector('.cadre-premium-bouton');

    if (!user.premium) {
        bouton.textContent = 'Go Premium';
        bouton.addEventListener('click', () => {
            window.location.href = '/premium';
        });
    } else {
        bouton.textContent = 'Obtenir';
        bouton.addEventListener('click', async () => {
            try {
                await obtenirCadrePremium(user.id, cadre.id);
                location.reload();
            } catch (error) {
                afficherMessage(error.message);
            }
        });
    }

    premiumList.appendChild(card);
});

const cadresExclusifs = await getCadresExclusifs();
const exclusifsList = document.getElementById('cadres-exclusifs-list');
const exclusifTemplate = document.getElementById('cadre-exclusif-template');

cadresExclusifs.forEach((cadre) => {
    const card = exclusifTemplate.cloneNode(true);
    card.id = '';
    card.classList.remove('hidden');

    card.querySelector('.cadre-exclusif-image').src = getFileUrl(cadre, cadre.image);
    card.querySelector('.cadre-exclusif-nom').textContent = cadre.nom;
    card.querySelector('.cadre-exclusif-prix').textContent = `${cadre.prix}€`;

    exclusifsList.appendChild(card);
});
