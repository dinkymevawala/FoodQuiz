var rs = require("readline-sync");
var chalk = require("chalk");
var questionsBank = require("./Questions");
var queCounter = 0;
var totQuestion = questionsBank.length;

let red = chalk.red;
let blue = chalk.blue;
let green = chalk.green;
let yellow = chalk.yellow;
let white = chalk.white;

var mrks = 0;

console.log(blue("Welcome to our FOOD quiz game!"));

console.log("\n There are total "+ totQuestion +" questions with it's options, you can just select any one like,", blue("1, 2, 3, 4"), "!\n");
console.log(green("+5 "), white("for right answer,"), red(" -2"), white(" for wrong answer!"));

var name = rs.question(white("Enter Your Name? "))
console.log(green(`Hello ${name}!`));

var displayQuestions = (que) => {
  console.log("\n" +  ((queCounter++) + 1) + ". " + que.question);
  que.options.forEach(displayOptions);
  answer = takeAnswer();
  
  if(que.options[answer - 1] == que.answer){
    mrks += 5;
    console.log(green("You gives Correct answer!"));
  } else {
    mrks -= 2;
    console.log(red("It's Wrong answer!"));
    console.log(yellow("Correct answer is: " + que.answer));
  }
};

var takeAnswer = () => {
  var ans = rs.question(white("Enter your answer? "));  
  if(ans >= 1 && ans <= 4){
    return ans;
  } else {
    console.log(red("You enter Invalid choice!!"));
    return takeAnswer();
  }  
};

var displayOptions = (option, index) => {  
  console.log("-> " + (index + 1) + ". " + option);
};

questionsBank.forEach(displayQuestions);
console.log(white("\nYour score is " + mrks));