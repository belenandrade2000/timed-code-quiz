var startButton = document.querySelector(".start-quiz");
var timerEl = document.querySelector(".timer");
var secondsLeft = 75;
var welcomeprompt = document.querySelector("welcome-prompt")
var firstQ = document.getElementById("first-?");
var secondQ = document.getElementById("second-?")
var thirdQ = document.getElementById("third-?")
var fourthQ = document.getElementById("fourth-?")
var fifthQ = document.getElementById("fifth-?")


// press start quiz button
function startQuiz() {
    timerCount = 75;
    startButton.disabled = true;
    startTimer()
  }
startButton.addEventListener("click", startQuiz);

 //timer
  function startTimer() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = "Time Remaining: " + secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        timerEl.textContent = "Time is up"
        // Calls function to create and append image
      }
    }, 1000);
  }

var questions = [
  { question: " 1. Commonly used data types DO NOT include...",
    answers: [ 
      {text: "strings", correct: false},
      {text: "booleans", correct: false},
      {text: "alerts", correct: true},
      {text: "numbers", correct: false}
    ]},

  { question: " 2. The condition in an if/else statement is enclosed with _______.",
    answers: [
      {text: "quotes", correct: false},
      {text: "curly brackets", correct: false},
      {text: "parenthesis", correct: true},
      {text: "square brackets", correct: false},
    ]}, 

  { question: " 3. Arrays in Javascript can be used to store _______.",
    answers: [
      {text: "numbers and strings", correct: false},
      {text: "other arrays", correct: false},
      {text: "booleans", correct: false},
      {text: "all of the above", correct: true},
    ]}, 

    { question: " 4. String values must be enclosed within ______ when being assigned to variables.",
    answers: [
      {text: "commas", correct: false},
      {text: "curly brackets", correct: false},
      {text: "quotes", correct: true},
      {text: "parenthesis", correct: false},
    ]}, 

    { question: " 5. A very useful tool used during development and debugging for printing content to the debugger is...",
    answers: [
      {text: "Javascript", correct: false},
      {text: "terminal/bash", correct: false},
      {text: "for loops", correct: false},
      {text: "console.log", correct: true},
    ]}, 
  ]
/*document.getElementById("welcome-prompt").style.display = "none";

firstQ.addEventListener("click", function(event) {
  var element = event.target;
 
  if (element.matches(".start-quiz")) {
   welcomeprompt.setAttribute("style", "display:none");
   firstQ.setAttribute("style", "display:block");
  }
 })


firstQ.addEventListener("click", function(event) {
 var element = event.target;

 if (element.matches("button")) {
  firstQ.setAttribute("style", "display:none");
  secondQ.setAttribute("style", "display:block");
 }
})  */