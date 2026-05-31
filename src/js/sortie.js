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
            ?.classList
            .remove(
                'hidden'
            );

    }

    participations.forEach(
        (participation) => {

            const sortie =
                participation
                    ?.expand
                    ?.sortie;

            if (!sortie) {

                console.log(
                    'Sortie introuvable',
                    participation
                );

                return;

            }

            console.log(
    'SORTIE COMPLETE',
    sortie
);

console.log(
    'EXPAND',
    sortie.expand
);

            const organisateur =
                sortie
                    ?.expand
                    ?.organisateur;

            const avatarUrl =
                organisateur?.avatar
                    ? `http://127.0.0.1:8090/api/files/${organisateur.collectionId}/${organisateur.id}/${organisateur.avatar}`
                    : '';

            const bars =
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
                '.sortie-avatar'
            ).src =
                avatarUrl;

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
                `${dateFormatee} à ${sortie.heure.replace(':', 'h')}`;

            if (
                sortie.type === 'barcrawl'
                || sortie.type === 'bar crawl'
            ) {

                card.querySelector(
                    '.sortie-bar'
                ).textContent =
                    'Bar Crawl';

            } else {

                card.querySelector(
                    '.sortie-bar'
                ).textContent =
                    bars?.[0]?.nom
                    || 'Bar';

            }

            card.querySelector(
                '.sortie-participants'
            ).textContent =
                `${sortie.participants || 0} participants`;

            card.style.cursor =
            'pointer';
            
            card.addEventListener(
                'click',
                () => {
                    window.location.href = `/sortie/${sortie.id}`;
                }
            );

            container.appendChild(
                card
            );

        }
    );

    template.remove();

}