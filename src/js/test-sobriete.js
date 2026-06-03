import {
    refreshCurrentUser,
    addUserPoints,
    getQuestionsSobriete
} from '../../backend/backend.mjs';

let score = 0;
let currentQuestion = 0;
let questions = [];
let hasAnswered = false;
let pointsAdded = false;

const step = document.getElementById('game-step');
const title = document.getElementById('game-title');
const question = document.getElementById('question');
const buttons = document.querySelectorAll('.answer-btn');
const message = document.getElementById('game-message');
const nextBtn = document.getElementById('next-btn');
const scoreDisplay = document.getElementById('score-display');
const progressBar = document.getElementById('progress-bar');

questions = await getQuestionsSobriete();

questions = (await getQuestionsSobriete())
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

showQuestion();

function showQuestion() {
    hasAnswered = false;

    const current = questions[currentQuestion];

    step.textContent = `Question ${currentQuestion + 1} / ${questions.length}`;
    title.textContent = 'Test de sobriété';
    question.textContent = current.question;
    message.textContent = '';

    scoreDisplay.textContent = `${score}/100`;
    progressBar.style.width = `${(currentQuestion / questions.length) * 100}%`;

    nextBtn.classList.add('hidden');

    const choices = [
        current.choix_1,
        current.choix_2,
        current.choix_3,
        current.choix_4
    ];

    buttons.forEach((button, index) => {
        button.textContent = choices[index];
        button.disabled = false;

        button.classList.remove('bg-paprika-c', 'text-white');
        button.classList.add('bg-white-bk');

        button.onclick = () => {
            checkAnswer(index + 1, current);
        };
    });
}

function checkAnswer(selectedAnswer, current) {
    if (hasAnswered) return;

    hasAnswered = true;

    buttons.forEach((button) => {
        button.disabled = true;
    });

    if (selectedAnswer === current.bonne_reponse) {
        score += current.points;
        message.textContent = `Bonne réponse ! +${current.points} points`;
    } else {
        message.textContent = 'Mauvaise réponse';
    }

    scoreDisplay.textContent = `${score}/100`;

    buttons[selectedAnswer - 1].classList.remove('bg-white-bk');
    buttons[selectedAnswer - 1].classList.add('bg-paprika-c', 'text-white');

    nextBtn.classList.remove('hidden');
}

nextBtn.addEventListener('click', async () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        await showFinalResult();
    }
});

async function showFinalResult() {
    const user = await refreshCurrentUser();

    if (user && !pointsAdded) {
        await addUserPoints(user.id, score);
        pointsAdded = true;
    }

    step.textContent = 'Terminé';
    title.textContent = 'Résultat final';
    question.textContent = `${score}/100 points`;

    buttons.forEach((button) => {
        button.classList.add('hidden');
    });

    progressBar.style.width = '100%';

    if (score >= 80) {
        message.textContent = 'Bon résultat';
    } else if (score >= 60) {
        message.textContent = 'Résultat moyen';
    } else if (score >= 40) {
        message.textContent = 'Tu peux faire mieux !';
    }

    nextBtn.textContent = 'Retour à l’accueil';
    nextBtn.classList.remove('hidden');

    nextBtn.onclick = () => {
        window.location.href = '/';
    };
}