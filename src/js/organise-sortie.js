import { createSortie, refreshCurrentUser, addUserPoints, addParticipantSortie } from '../../backend/backend.mjs';

const form = document.getElementById('sortie-form');
const errorPopup = document.getElementById('error-popup');
const errorMessage = document.getElementById('error-message');
const closeError = document.getElementById('close-error');
const classicBtn = document.getElementById('classic-btn');
const crawlBtn = document.getElementById('crawl-btn');
const typeInput = document.getElementById('type-sortie');
const crawlBars = document.getElementById('crawl-bars');
const participantsInput = document.querySelector('input[name="participants"]');
const pointsDisplay = document.getElementById('points-display');

function calculatePoints(participants, hasPremium) {
    let points = 30 + participants;

    if (participants >= 20) points = 50;

    if (hasPremium && participants > 20) {
        points = 50 + ((participants - 20) * 5);
    }

    points = Math.min(points, hasPremium ? 130 : 50);
    return points;
}

classicBtn.addEventListener('click', (e) => {
    e.preventDefault();

    typeInput.value = 'classique';

    classicBtn.classList.remove('bg-white-bk', 'text-yellow-c', 'border-yellow-c');
    classicBtn.classList.add('bg-paprika-c', 'text-white', 'border-paprika-c');

    crawlBtn.classList.remove('bg-paprika-c', 'text-white', 'border-paprika-c');
    crawlBtn.classList.add('bg-white-bk', 'text-yellow-c', 'border-yellow-c');

    crawlBars.classList.add('hidden');
    crawlBars.classList.remove('flex');
});

crawlBtn.addEventListener('click', (e) => {
    e.preventDefault();

    typeInput.value = 'bar crawl';

    crawlBtn.classList.remove('bg-white-bk', 'text-yellow-c', 'border-yellow-c');
    crawlBtn.classList.add('bg-paprika-c', 'text-white', 'border-paprika-c');

    classicBtn.classList.remove('bg-paprika-c', 'text-white', 'border-paprika-c');
    classicBtn.classList.add('bg-white-bk', 'text-yellow-c', 'border-yellow-c');

    crawlBars.classList.remove('hidden');
    crawlBars.classList.add('flex');
});

closeError.addEventListener('click', () => {
    errorPopup.classList.add('hidden');
    errorPopup.classList.remove('flex');
});

participantsInput.addEventListener('input', async () => {
    const user = await refreshCurrentUser();
    const hasPremium = user?.premium;
    const participants = Number(participantsInput.value) || 0;
    const points = calculatePoints(participants, hasPremium);

    pointsDisplay.textContent = `+${points}`;
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const participants = Number(formData.get('participants'));
    const user = await refreshCurrentUser();

    if (!user) {
        errorMessage.textContent = 'Vous devez être connecté pour créer une sortie.';
        errorPopup.classList.remove('hidden');
        errorPopup.classList.add('flex');
        return;
    }

    const hasPremium = user.premium;

    if (!hasPremium && participants > 20) {
        errorMessage.textContent = 'Sans abonnement Premium, la limite est de 20 participants.';
        errorPopup.classList.remove('hidden');
        errorPopup.classList.add('flex');
        return;
    }

    const defaultBar = new URLSearchParams(window.location.search).get('bar');
    const selectedBars = formData.getAll('bar');

    const bars = formData.get('type') === 'classique'
        ? defaultBar
            ? [defaultBar.trim()]
            : selectedBars.map((barId) => typeof barId === 'string' ? barId.trim() : '').filter(Boolean)
        : selectedBars.map((barId) => typeof barId === 'string' ? barId.trim() : '').filter(Boolean);

    if (bars.length === 0) {
        errorMessage.textContent = 'Vous devez sélectionner au moins un bar.';
        errorPopup.classList.remove('hidden');
        errorPopup.classList.add('flex');
        return;
    }

    const points = calculatePoints(participants, hasPremium);

    const data = {
        titre: formData.get('titre'),
        description: formData.get('description'),
        date: formData.get('date'),
        heure: formData.get('heure'),
        participants: participants,
        type: formData.get('type'),
        organisateur: user.id,
        bar: bars,
        points: points
    };

    const result = await createSortie(data);

    if (result.success) {
        try {
            await addParticipantSortie(result.sortie.id, user.id);
        } catch (error) {
            console.error('Erreur participant :', error);
        }

        await addUserPoints(user.id, points);

        form.reset();
        typeInput.value = 'classique';

        crawlBars.classList.add('hidden');
        crawlBars.classList.remove('flex');

        pointsDisplay.textContent = '+30';

        classicBtn.classList.remove('bg-white-bk', 'text-yellow-c', 'border-yellow-c');
        classicBtn.classList.add('bg-paprika-c', 'text-white', 'border-paprika-c');

        crawlBtn.classList.remove('bg-paprika-c', 'text-white', 'border-paprika-c');
        crawlBtn.classList.add('bg-white-bk', 'text-yellow-c', 'border-yellow-c');

        window.location.href = '/sortie';

    } else {
        errorMessage.textContent = 'Une erreur est survenue lors de la création de la sortie.';
        errorPopup.classList.remove('hidden');
        errorPopup.classList.add('flex');
    }
});
