var questionDiv = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var startBtn = document.getElementById("start-btn");
var startScreen = document.getElementById("start-screen");
var answerDisp = document.getElementById("answer");
var choicesDiv = document.getElementById('choices');
var answerCor = document.getElementById('answer-correct');
var answerInc = document.getElementById('answer-incorrect');
var endScreen = document.getElementById('end-screen');
var countdown = document.getElementById('time');
var questions = [
    {
        title: 'Commonly used data types DO NOT include:',
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts',
    },
    {
        title: 'The condition in an if / else statement is enclosed within ____.',
        choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
        answer: 'parentheses',
    },
    {
        title: 'Arrays in JavaScript can be used to store ____.',
        choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above',
    },
    {
        title: 'String values must be enclosed within ____ when being assigned to variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: 'quotes',
    },
    {
        title: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
        answer: 'console.log',
    },

];

var time = questions.length * 15;
var qPosition = 0
var initials = document.getElementById('initials');
var submit = document.getElementById('submit');
var timerText = document.getElementById('timer-text');
let count = 0;

//start visibility of questions div
function start() {

    startScreen.classList.add('hide');

    questionDiv.classList.remove('hide');
    // add timer function


    renderQuestion()
}

function timerStart() {


    const timerText = document.getElementById('timer-text');

    setInterval(() => {
        if (count < time, qPosition < questions.length) {
            count++;
            timerText.textContent = count;
        }

        else {
            questionDiv.classList.add('hide');
            endScreen.classList.remove('hide');
        }

    }, 1000);

}
document.addEventListener('DOMContentLoaded', function () {
    const startBtn = document.getElementById('start-btn');
    startBtn.addEventListener('click', timerStart);
});

// Render questions to div
function renderQuestion() {

    questionTitle.textContent = questions[qPosition].title

    choicesDiv.innerHTML = ''
    for (var i = 0; i < questions[qPosition].choices.length; i++) {
        var answerBtn = document.createElement('button');
        answerBtn.textContent = questions[qPosition].choices[i];

        answerBtn.addEventListener('click', next)

        choicesDiv.appendChild(answerBtn);
    }

}

// Checks if answer is true of false
function next() {
    console.log(this.textContent);
    if (this.textContent === questions[qPosition].answer) {
        console.log(true)
        answerInc.classList.add('hide');
        answerCor.classList.remove('hide');


    } else {
        console.log(false);
        answerCor.classList.add('hide');
        answerInc.classList.remove('hide');
        count += 15;


    }
    qPosition++

    if (qPosition < questions.length) {
        renderQuestion()
    } else {
        questionDiv.classList.add('hide');
        endScreen.classList.remove('hide');



    }
}

// Save score and initials to local storage 
function saveScore() {

    var score = {
        count: count,
        initials: initials.value
    }

    // save time score to the local storage

    localStorage.setItem('gameScore', JSON.stringify(score));

    leaderboard()

}

document.addEventListener('DOMContentLoaded', function () {
    var savedScores = document.getElementById('saved-scores');

    function leaderboard() {
        var score = JSON.parse(localStorage.getItem('gameScore'));
        if (score) {
            var listItem = document.createElement('li');
            listItem.innerHTML = '<span>' + score.initials + '</span><span>' + score.count + '</span>';
            savedScores.appendChild(listItem);
        }
    }

    var leaderboardAccess = document.getElementById('leaderboard-btn');
    leaderboardAccess.addEventListener('click', leaderboard);

    leaderboard();
});

// event listeners
startBtn.addEventListener('click', start);
startBtn.addEventListener('click', timerStart);
submit.addEventListener('click', saveScore);





