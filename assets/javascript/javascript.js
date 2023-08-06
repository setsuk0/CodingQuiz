function shuffleAnswers(answers) {
  for (let i = answers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [answers[i], answers[j]] = [answers[j], answers[i]];
  }
  return answers;
}

// Array of new coding-related questions and answer options
var myQuestions = [
  {
    question: "What is the purpose of HTML?",
    correct: "Structuring web content",
    answers: shuffleAnswers([
      "Styling web pages",
      "Managing databases",
      "Structuring web content",
      "Defining server-side logic",
    ]),
  },
  {
    question: "What does CSS stand for?",
    correct: "Cascading Style Sheets",
    answers: shuffleAnswers([
      "Cascading Style Sheets",
      "Client-Side Scripting",
      "Cross-Site Scripting",
      "Creative Style Solutions",
    ]),
  },
  {
    question: "Which programming language is known as the 'language of the web'?",
    correct: "JavaScript",
    answers: shuffleAnswers([
      "Python",
      "Java",
      "JavaScript",
      "C++",
    ]),
  },
  {
    question: "What symbol is used for declaring variables in JavaScript?",
    correct: "var",
    answers: shuffleAnswers(["let", "const", "var", "def"]),
  },
  {
    question: "What is the result of the expression 10 % 3 in JavaScript?",
    correct: "1",
    answers: shuffleAnswers([
      "3",
      "0",
      "1",
      "2",
    ]),
  },
];

// Set the current page to the first question
var currentPage = 0;
var score = 0;
var secondsRemaining = 60;

var timer = document.getElementById("timer");

timer.innerHTML = secondsRemaining + " seconds remaining";

// Tick down seconds remaining
setInterval(function () {
  if (secondsRemaining > 0) {
    secondsRemaining -= 1;
    updateTimeRemaining();
  } else {
    window.location = "./highscores.html";
  }
}, 1000);

// Get the question element and display the first question
var question = document.getElementById("question");
question.innerHTML = myQuestions[currentPage].question;

// Function to move to the next page/question
function nextPage() {
  // Increment the current page
  currentPage++;
  // Get the question element and display the next question
  question.innerHTML = myQuestions[currentPage].question;
  // Get all the answer buttons and update their text to display the new answer options
  var answerButtons = document.querySelectorAll(".btn");
  for (var i = 0; i < answerButtons.length; i++) {
    answerButtons[i].innerHTML = myQuestions[currentPage].answers[i];
  }
}

// Function to check user's answer
function checkAnswer(selectedAnswer) {
  var correct = myQuestions[currentPage].correct;
  var userAnswer = myQuestions[currentPage].answers[selectedAnswer];
  if (userAnswer === correct) {
    score += 1;
  } else {
    secondsRemaining -= 10;
    updateTimeRemaining();
  }

  // If the current page is the last question, redirect to the high score page
  if (currentPage == myQuestions.length - 1) {
    window.location = "./initials-form.html?score=" + score;
  }
  // Move to the next page/question
  nextPage();
}

function updateTimeRemaining() {
  timer.innerHTML = secondsRemaining + " seconds remaining";
}

// When the window loads, go to the first page/question
window.onload = function () {
  nextPage();
};
