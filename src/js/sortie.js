import {
    refreshCurrentUser,
    getUserSorties
} from '../../backend/backend.mjs';

const user =
    await refreshCurrentUser();

const container =
    document.getElementById(
        'sorties-container'
    );

const template =
    document.getElementById(
        'sortie-template'
    );

if (!user) {

    console.log(
        'Utilisateur non connecté'
    );

} else {

    const participations =
        await getUserSorties(
            user.id
        );

    console.log(
        participations.length
    );

    if (
        participations.length === 0
    ) {

        document
            .getElementById(
                'sorties-empty'
            )
            .classList
            .remove(
                'hidden'
            );

    }

    participations.forEach(
        (participation) => {

            console.log(
                participation
            );

            const sortie =
                participation
                    ?.expand
                    ?.sortie;

            console.log(
                sortie
            );

            if (!sortie) {

                console.log(
                    'Sortie introuvable',
                    participation
                );

                return;

            }

            const organisateur =
                sortie
                    ?.expand
                    ?.organisateur;

            const bar =
                sortie
                    ?.expand
                    ?.bar;

            const card =
                template.cloneNode(
                    true
                );

            card.id = '';

            card.classList.remove(
                'hidden'
            );

            card.querySelector(
                '.sortie-title'
            ).textContent =
                sortie.titre || '';

            card.querySelector(
                '.sortie-organisateur'
            ).textContent =
                organisateur?.username
                || 'Utilisateur';

            const date =
    new Date(
        sortie.date
    );

const dateFormatee =
    date.toLocaleDateString(
        'fr-FR',
        {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }
    );

card.querySelector(
    '.sortie-date'
).textContent =
    `${dateFormatee} à ${sortie.heure}`;

            if (sortie.type === 'barcrawl') {

    card.querySelector(
        '.sortie-bar'
    ).textContent =
        'Bar Crawl';

} else {

    card.querySelector(
        '.sortie-bar'
    ).textContent =
        bar?.nom
        || 'Bar';

}

            card.querySelector(
                '.sortie-participants'
            ).textContent =
                `${sortie.participants || 0} participants`;

            container.appendChild(
                card
            );

        }
    );

    template.remove();

}