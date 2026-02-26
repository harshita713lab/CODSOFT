const quizBox = document.getElementById('quiz-box');
const resultBox = document.getElementById('result-box');
const questionText = document.getElementById('question-text');
const currentQSpan = document.getElementById('current-q');
const totalQSpan = document.getElementById('total-q');
const nextBtn = document.getElementById('next-btn');
const finalScoreSpan = document.getElementById('final-score');
const totalScoreSpan = document.getElementById('total-score');
const optionBtns = [
    document.getElementById('btn-1'),
    document.getElementById('btn-2'),
    document.getElementById('btn-3'),
    document.getElementById('btn-4')
];

let questions = JSON.parse(localStorage.getItem('quizQuestions')) || [];
let currentQuestionIndex = 0;
let score = 0;
let selectedOptionIndex = null;

if (questions.length === 0) {
    alert("No questions found! Please create a quiz first.");
    window.location.href = "dashboard.html";
} else {
    totalQSpan.innerText = questions.length;
    nextBtn.innerHTML = 'Save Answer & Next <i class="fa-solid fa-arrow-right"></i>';
    loadQuestion();
}

function loadQuestion() {
    nextBtn.style.display = 'none';
    selectedOptionIndex = null; 
    
    let currentQ = questions[currentQuestionIndex];
    questionText.innerText = currentQ.question;
    currentQSpan.innerText = currentQuestionIndex + 1;

    optionBtns.forEach((btn, index) => {
        btn.innerText = currentQ.options[index];
        btn.style.backgroundColor = "rgb(235, 240, 255)"; 
        btn.style.color = "rgb(22, 21, 21)";
        btn.disabled = false;
        
        btn.onclick = function() {
            selectOption(index);
        };
    });
}

function selectOption(index) {
    selectedOptionIndex = index; 

    optionBtns.forEach(btn => {
        btn.style.backgroundColor = "rgb(235, 240, 255)";
        btn.style.color = "rgb(22, 21, 21)";
    });

    optionBtns[index].style.backgroundColor = "rgb(73, 86, 235)"; 
    optionBtns[index].style.color = "white";

    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.innerHTML = 'Submit Quiz <i class="fa-solid fa-check"></i>';
    }

    nextBtn.style.display = 'block';
}

nextBtn.addEventListener('click', function() {
    let correctIndex = questions[currentQuestionIndex].answerIndex;
    
    if (selectedOptionIndex === correctIndex) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    quizBox.style.display = 'none';
    resultBox.style.display = 'block';
    finalScoreSpan.innerText = score;
    totalScoreSpan.innerText = questions.length;
}