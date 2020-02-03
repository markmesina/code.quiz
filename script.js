
// on page load: 
// show game start screen
// include how to play instructions
var welcome = alert('Welcome to Code Quiz! Answer select questions and compare scores with fellow Developers!');
var howToPlay = alert ('Select correct answer and hit next question button');
var beware = alert ('Beware! If you make a mistake, you lose 5 seconds!');
var haveFun = alert ('HAVE FUN!');
const $startQuiz = document.getElementsByClassName('.start-quiz');
const $showQuest = document.getElementsByClassName('.show-question');
const $timer = document.getElementsByClassName('.timer');
var timeLeft = 60;

function setTime(){
  let timeInterval = setInterval(function(){
    timeLeft--;
    $timer.textContent = `Time: ${timeLeft} seconds remaining`;

    if(timeLeft === 0) {
      clearInterval(timeInterval);
      alert('thank you for playing!');
    }
  }, 1000);
}
//     start timer
setTime();

//   on start button click:
$startQuiz.addEventListener('click', function(){
  let questions = [
    {
      title: "Which of the following is NOT a javascript data type?",
      choices: ["Array", "Object", "Table", "String"],
      answer: "Table"
    },
    {
      title: "Which parenthesis type is used to invoke functions?",
      choices: ["{}", "[]", "||", "()"],
      answer: "()"
    },
    {
      title: "What will this statement return: console.log('7' == 7)",
      choices: ["true", "false", "maybe", "depends"],
      answer: "true"
    }];
    
      
    });


//     hide game-start div 
//     show questions div
//     show question
//     on answer selection:
//     check to see if answer is correct
//     if correct:
//     display success message
//     add to score
//     show next question
//     if incorrect:
//     display fail message
//     deduct time from timer
//       show next question
//       for game end:
//     if all the questions have been answered:
//     display score
//       prompt to save initials and results
//       on save:
//       record results in local storage
//       if time runs out:
//       display score
//       prompt to try again

// functions:
//     resetGame()
//     endGame()
//     restartGame()
//     renderQuestion()
//     checkAnswer()
//     saveScore()
//     clearScores()
//     toggleScores()
//     */

