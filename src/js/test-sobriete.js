import { refreshCurrentUser, addUserPoints } from '../../backend/backend.mjs';

let score = 0;
let currentGame = 1;
let gameFinished = false;
let pointsAdded = false;

const title = document.getElementById('game-title');
const circle = document.getElementById('circle');
const message = document.getElementById('game-message');
const nextBtn = document.getElementById('next-btn');
const quizContainer = document.getElementById('quiz-container');
const question = document.getElementById('question');
const answerButtons = document.querySelectorAll('.answer-btn');
const answersContainer = document.getElementById('answers-container');
const sequenceContainer = document.getElementById('sequence-container');
const sequenceDisplay = document.getElementById('sequence-display');
const sequenceInput = document.getElementById('sequence-input');
const sequenceSubmit = document.getElementById('sequence-submit');

title.textContent = 'Test des réflexes';
message.textContent = 'Attends que le cercle devienne vert';

let startTime = 0;
let canClick = false;

const delay = Math.random() * 3000 + 2000;

setTimeout(() => {
    circle.classList.remove('bg-paprika-c');
    circle.classList.add('bg-green-500', 'scale-110');
    message.textContent = 'Clique maintenant !';
    startTime = Date.now();
    canClick = true;
}, delay);

circle.addEventListener('click', () => {
    if (gameFinished) return;

    if (!canClick) {
        message.textContent = 'Trop tôt !';
        return;
    }

    gameFinished = true;

    const reactionTime = Date.now() - startTime;

    if (reactionTime < 400) score = 15;
    else if (reactionTime < 600) score = 10;
    else if (reactionTime < 800) score = 5;
    else score = 0;

    document.getElementById('score-display').textContent = `${score}/80`;
    document.getElementById('progress-bar').style.width = '20%';

    title.textContent = 'Résultat';
    message.textContent = `${reactionTime} ms • ${score} points`;

    nextBtn.classList.remove('hidden');

    circle.classList.remove('bg-green-500');
    circle.classList.add('bg-paprika-c');
});

nextBtn.addEventListener('click', () => {
    currentGame++;

    if (currentGame === 2) startCalculGame();
    else if (currentGame === 3) startLogiqueGame();
    else if (currentGame === 4) startMemoireVisuelleGame();
    else if (currentGame === 5) startMemoireSequenceGame();
    else if (currentGame === 6) showFinalResult();
});

function startCalculGame() {
    document.getElementById('game-step').textContent = 'Défi 2 / 5';
    title.textContent = 'Calcul mental';
    message.textContent = '';

    circle.classList.add('hidden');
    nextBtn.classList.add('hidden');
    quizContainer.classList.remove('hidden');

    const a = Math.floor(Math.random() * 20) + 1;
    const b = Math.floor(Math.random() * 20) + 1;
    const bonneReponse = a + b;

    question.textContent = `${a} + ${b} = ?`;

    const reponses = [
        bonneReponse,
        bonneReponse + 2,
        bonneReponse - 3,
        bonneReponse + 5
    ].sort(() => Math.random() - 0.5);

    answerButtons.forEach((button, index) => {
        button.textContent = reponses[index];
        button.onclick = () => {
            if (Number(button.textContent) === bonneReponse) score += 15;

            document.getElementById('progress-bar').style.width = '40%';

            title.textContent = 'Résultat';
            message.textContent = `Score total : ${score}/80`;

            quizContainer.classList.add('hidden');
            nextBtn.classList.remove('hidden');
        };
    });
}

function startLogiqueGame() {
    document.getElementById('game-step').textContent = 'Défi 3 / 5';
    title.textContent = 'Logique';
    message.textContent = '';

    nextBtn.classList.add('hidden');
    quizContainer.classList.remove('hidden');

    const questions = [
        { question: '2 - 4 - 8 - 16 - ?', answers: ['24', '32', '64', '20'], correct: '32' },
        { question: '5 - 10 - 20 - 40 - ?', answers: ['60', '80', '90', '100'], correct: '80' },
        { question: '1 - 3 - 5 - 7 - ?', answers: ['8', '9', '10', '11'], correct: '9' }
    ];

    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];

    question.textContent = randomQuestion.question;

    answerButtons.forEach((button, index) => {
        button.textContent = randomQuestion.answers[index];
        button.onclick = () => {
            if (button.textContent === randomQuestion.correct) score += 20;

            document.getElementById('score-display').textContent = `${score}/80`;
            document.getElementById('progress-bar').style.width = '60%';

            title.textContent = 'Résultat';
            message.textContent = `Score total : ${score}/80`;

            quizContainer.classList.add('hidden');
            nextBtn.classList.remove('hidden');
        };
    });
}

function startMemoireVisuelleGame() {
    document.getElementById('game-step').textContent = 'Défi 4 / 5';
    title.textContent = 'Mémoire visuelle';
    message.textContent = 'Mémorise la case colorée';

    answersContainer.classList.remove('flex', 'flex-col');
    answersContainer.classList.add('grid', 'grid-cols-2');

    nextBtn.classList.add('hidden');
    quizContainer.classList.remove('hidden');

    question.textContent = '';

    answerButtons.forEach((button) => {
        button.classList.remove('bg-white-bk');
        button.classList.remove('p-4');
        button.classList.add('h-24');
    });

    const bonneCase = Math.floor(Math.random() * 4);

    answerButtons.forEach((button, index) => {
        button.textContent = '';
        button.style.backgroundColor = '';
        button.classList.add('bg-white-bk');
        button.onclick = null;

        if (index === bonneCase) {
            button.style.backgroundColor = 'orange';
        }
    });

    setTimeout(() => {
        answerButtons.forEach((button, index) => {
            button.style.backgroundColor = '';
            button.onclick = () => {
                if (index === bonneCase) score += 15;

                document.getElementById('score-display').textContent = `${score}/80`;
                document.getElementById('progress-bar').style.width = '80%';

                title.textContent = 'Résultat';
                message.textContent = `Score total : ${score}/80`;

                quizContainer.classList.add('hidden');
                nextBtn.classList.remove('hidden');
            };
        });

        message.textContent = 'Quelle case était colorée ?';
    }, 2000);
}

function startMemoireSequenceGame() {
    document.getElementById('game-step').textContent = 'Défi 5 / 5';
    title.textContent = 'Mémoire de séquence';
    message.textContent = 'Retiens les chiffres';

    nextBtn.classList.add('hidden');
    quizContainer.classList.add('hidden');
    sequenceContainer.classList.remove('hidden');

    const sequence = Array.from({ length: 4 }, () =>
        Math.floor(Math.random() * 10)
    ).join('');

    sequenceDisplay.textContent = sequence;

    sequenceInput.disabled = true;
    sequenceSubmit.disabled = true;
    sequenceInput.value = '';

    setTimeout(() => {
        sequenceDisplay.textContent = '? ? ? ?';
        sequenceInput.disabled = false;
        sequenceSubmit.disabled = false;
        sequenceInput.focus();
        message.textContent = 'Recopie la séquence';
    }, 3000);

    sequenceSubmit.onclick = () => {
        if (sequenceInput.value === sequence) score += 15;

        document.getElementById('score-display').textContent = `${score}/80`;
        document.getElementById('progress-bar').style.width = '100%';

        title.textContent = 'Résultat';
        message.textContent = `Score total : ${score}/80`;

        sequenceContainer.classList.add('hidden');
        nextBtn.classList.remove('hidden');
    };
}

async function showFinalResult() {
    const user = await refreshCurrentUser();

    if (user && !pointsAdded) {
        await addUserPoints(user.id, score);
        pointsAdded = true;
    }

    document.getElementById('game-step').textContent = 'Terminé';
    title.textContent = 'Résultat final';

    circle.classList.add('hidden');
    quizContainer.classList.add('hidden');
    sequenceContainer.classList.add('hidden');

    let resultat = '';

    if (score >= 70) resultat = 'Très bon résultat';
    else if (score >= 50) resultat = 'Résultat correct';
    else if (score >= 30) resultat = 'Prudence';
    else resultat = 'Ne prends pas le volant';

    message.textContent = `${score}/80 • ${resultat}`;

    document.getElementById('score-display').textContent = `${score}/80`;
    document.getElementById('progress-bar').style.width = '100%';

    nextBtn.classList.remove('hidden');
    nextBtn.textContent = 'Retour à l’accueil';

    nextBtn.onclick = () => {
        window.location.href = '/';
    };
}