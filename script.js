
// on page load: 
// show game start screen
// include how to play instructions

// var welcome = alert('Welcome to Code Quiz! Answer select questions and compare scores with fellow Developers!');
// var howToPlay = alert ('Select correct answer and hit next question button');
// var beware = alert ('Beware! If you make a mistake, you lose 5 seconds!');
// var haveFun = alert ('HAVE FUN!');

//     hide game-start div 
//     show questions div
//     show question
function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
  return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
  if(this.getQuestionIndex().isCorrectAnswer(answer)) {
      this.score++;
  }

  this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
  return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
  return this.questions[this.questionIndex];
}

//     if correct:
//     check to see if answer is correct
Quiz.prototype.guess = function(answer) {
  if(this.getQuestionIndex().isCorrectAnswer(answer)) {
    //     add to score
      this.score++;
  }

  this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
  return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

// create questions here
var questions = [
  new Question("Hyper Text Markup Language Stand For?", ["JavaScript", "XHTML","CSS", "HTML"], "HTML"),
  new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
  new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
  new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
  new Question("Webdevtrick.com is about..", ["Web Design", "Graphic Design", "SEO & Development", "All"], "All")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
//     on answer selection:
//     display success message
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

