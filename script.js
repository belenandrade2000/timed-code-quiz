var startButton = document.querySelector(".start-quiz");
var timerEl = document.querySelector(".timer");
var secondsLeft = 75;


// press start quiz button
function startQuiz() {
    timerCount = 75;
    startButton.disabled = true;
    startTimer()
  }

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








startButton.addEventListener("click", startQuiz);