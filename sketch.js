var canvas;
var contestantCount;
var database;
var quiz, question, contestant;
var gameState = 0;


function setup(){
  canvas = createCanvas(850,400);
  background("pink");
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
 
}
