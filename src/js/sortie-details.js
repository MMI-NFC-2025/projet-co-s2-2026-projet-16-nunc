import {
    getCurrentUser,
    updateSortieById,
    deleteSortieCompletely
} from '../../backend/backend.mjs';

const main =
    document.querySelector(
        '[data-organisateur]'
    );

const organisateurId =
    main?.dataset
        ?.organisateur;

console.log(
    'Organisateur :',
    organisateurId
);

const currentUser =
    await getCurrentUser();

console.log(
    'Current User :',
    currentUser
);

console.log(
    'Organisateur :',
    organisateurId
);

const panel =
    document.getElementById(
        'organisateur-panel'
    );

if (
    currentUser?.id ===
    organisateurId
) {

    panel?.classList.remove(
        'hidden'
    );

}

const saveBtn =
    document.getElementById(
        'save-btn'
    );

const deleteBtn =
    document.getElementById(
        'delete-btn'
    );

if (saveBtn) {

    saveBtn.addEventListener(
        'click',
        async () => {

            const sortieId =
                saveBtn.dataset.sortieId;

            const date =
                document.getElementById(
                    'date'
                ).value;

            const heure =
                document.getElementById(
                    'heure'
                ).value;

            const barSelect =
    document.getElementById(
        'bar'
    );

let bar;

if (
    barSelect?.multiple
) {

    bar =
        Array.from(
            barSelect.selectedOptions
        ).map(
            (option) =>
                option.value
        );

} else {

    bar =
        barSelect?.value;

}

            const data = {
                date,
                heure
            };

            if (bar) {

                data.bar = bar;

            }

            await updateSortieById(
                sortieId,
                data
            );

            alert(
                'Sortie mise à jour'
            );

            location.reload();

        }
    );

}

if (deleteBtn) {

    deleteBtn.addEventListener(
        'click',
        async () => {

            const confirmation =
                confirm(
                    'Supprimer cette sortie ?'
                );

            if (!confirmation) {

                return;

            }

            const sortieId =
                deleteBtn.dataset.sortieId;

            await deleteSortieCompletely(
                sortieId
            );

            window.location.href =
                '/sortie';

        }
    );

}