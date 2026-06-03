import {
    getCurrentUser,
    getUserSorties
} from '../../backend/backend.mjs';

const user = getCurrentUser();

const container = document.getElementById('home-sorties');
const template = document.getElementById('home-sortie-template');

if (user && container && template) {

    const participations = await getUserSorties(user.id);
    const maintenant = new Date();

    const prochainesSorties = participations
        .filter((participation) => {
            const sortie = participation.expand?.sortie;
            if (!sortie) return false;

            const dateSortie = new Date(
                `${sortie.date.substring(0, 10)}T${sortie.heure}`
            );

            return dateSortie >= maintenant;
        })
        .sort((a, b) => {
            const dateA = new Date(
                `${a.expand.sortie.date.substring(0, 10)}T${a.expand.sortie.heure}`
            );
            const dateB = new Date(
                `${b.expand.sortie.date.substring(0, 10)}T${b.expand.sortie.heure}`
            );
            return dateA - dateB;
        })
        .slice(0, 2);

    prochainesSorties.forEach(({ expand }) => {
        const sortie = expand.sortie;

        const card = template.cloneNode(true);
        card.id = '';
        card.classList.remove('hidden');

        const date = new Date(sortie.date);
        const dateFormatee = date.toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });

        const barNom =
            sortie.expand?.bar?.[0]?.nom ||
            sortie.expand?.bar?.nom ||
            'Bar';

        card.querySelector('.home-sortie-title').textContent = sortie.titre;
        card.querySelector('.home-sortie-date').textContent = dateFormatee;
        card.querySelector('.home-sortie-bar').textContent = barNom;
        card.querySelector('.home-sortie-participants').textContent =
            `${sortie.participants} participants`;

        container.appendChild(card);
    });

    template.remove();
}