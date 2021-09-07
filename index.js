//GENERIC QUIZ
var que1 = {
  que:"Name the longest River on earth?\n 1. Amazon \n 2. Missisipi \n 3. Nile \n enter the choice number only. ",
  ans:"3"
  
}
var que2={
  que:"Nearest sun to our solar system is ?\n 1.Proxima Centurai \n 2.Alpha Centurai  \n 3.Bernard's Star \n 4.Sirius \n enter the choice number only.",
  ans:"1"
}
var que3={
  que:"Largest Desert in India? ",
  ans:"Thar"
}


var que4={
  que:"Name the LARGEST River on earth?\n 1. Amazon \n 2. Missisipi \n 3. Nile \n enter the choice number only. ",
  ans:"1"
}
var que5={
  que:"First Indian into space is \n 1. Kalpana Chawla \n 2. Rakesh Sharma \n 3. Sunita Williams \n enter choice number only ? ",
  ans:"2"
}

var que6={
  que:"The number of terrestrial planets in the solar system is? ",
  ans:"4"
}
var que7={
  que:"Name the first dog into space? \n 1.Reiri \n 2.Laika \n 3.Yuriko \n 4.Sasha",
  ans:"2"
}
var que8={
  que: "Io is Saturn's Moon. [y/n]? ",
  ans: "y"
}
var que9={
  que:"What is the outermost region of the Sun’s atmosphere called? \n 1. Corona \n 2. Penumbra \n 3. Aurora ",
  ans:"1"
}

var queList=[que1,que2,que3,que4,que5,que6,que7,que8,que9];


//ex14: club everything to make the game
var rls = require("readline-sync");
var chalk=require('chalk');
var log=console.log;
var levelControl=6;

var score = 0;
var highScore=3;

var userScores = [
   
]

function getScore() {
   var userName = rls.question("Hi, let's start our journey ! \n Please enter your name to continue..");
    log(chalk.yellow.bold("\n Welcome to Level 1 !!!\n"));

  for (var i=0; i<queList.length-levelControl; i++) {
    var q = queList[i];
    testQuestion(q.que, q.ans)
    if(score==3){
      levelControl=3;
      log(chalk.yellow.bold("\n Welcome to Level 2 !!!\n"));

    }
    else if(score==6){
      levelControl=0;
      log(chalk.yellow.bold("\n Welcome to Level 3 !!!\n"));
    }
  }
  
  log(chalk.black.bgWhite.bold("Final score: ",score));
  if(score>highScore){
    log(chalk.red.bold("NEW HIGH SCORE !!!"));
    var update= rls.question("Send highscore screen shot [y/n]? ");
    highScore=score;

    if(update==='y'){
      var element={};
    element[ "name" ] = userName;
    element["score"]=score;
    userScores.push(element);
    }

  }
  else{
    log(chalk.red.bold("So close to beating previous highscore of ",highScore));
  }
  score=0;
  anotherGame();

}

function testQuestion(question, answer)
 {
  var inp = rls.question(question);

  if (inp.toUpperCase() === answer.toUpperCase())
   { 
    console.log("Correct!");
    score = score + 1;
    
  } 
  else 
  {
    console.log("Oops, slightly off the correct!");  
  }
  console.log("\n current score: "+score);
}

function anotherGame(){
  log(chalk.blue("------------------\n "))
  var choice=rls.question("Want to try again ?[y/n] ");
  if(choice==="y"){
    getScore();
  }
}

getScore();
