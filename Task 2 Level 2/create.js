const quizForm = document.getElementById('create-quiz-form');
const questionCountSpan = document.getElementById('question-count');

let questionsArray = JSON.parse(localStorage.getItem('quizQuestions')) || [];

questionCountSpan.innerText = questionsArray.length;

quizForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const questionText = document.getElementById('question-text').value;
    const option1 = document.getElementById('opt1').value;
    const option2 = document.getElementById('opt2').value;
    const option3 = document.getElementById('opt3').value;
    const option4 = document.getElementById('opt4').value;
    
    const correctAnswer = document.getElementById('correct-answer').value;

    if (correctAnswer === "") {
        alert("Please select the correct answer!");
        return;
    }

    const newQuestion = {
        question: questionText,
        options: [option1, option2, option3, option4],
        answerIndex: parseInt(correctAnswer) - 1  
    };

    questionsArray.push(newQuestion);

    localStorage.setItem('quizQuestions', JSON.stringify(questionsArray));

    questionCountSpan.innerText = questionsArray.length;
    
    quizForm.reset();

    alert("Question Saved Successfully! 🎉 Aap aur bhi questions add kar sakte hain.");
});