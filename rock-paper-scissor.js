const choices = ("rock", "paper", "scissor");

function getComputerChoice() {}
const randomNumber = Math.floor(Math.random() * 3) + 1;
if (randomNumber === 1) {
  console.log("Computer chose Rock");
}
if (randomNumber === 2) {
  console.log("Computer chose Paper");
}
if (randomNumber === 3) {
  console.log("Computer chose Scissor");
}

function getHumanChoice() {}
let textInput = prompt("Please enter Rock, Paper or Scissors in text");
if (textInput === null) {
  console.log("Maybe try entering some text");
}
if (textInput === "rock") {
  console.log("You chose Rock!");
}
if (textInput === "paper") {
  console.log("You chose Paper!");
}
if (textInput === "scissor") {
  console.log("You chose Scissor!");
}

function playRound(getHumanChoice, getComputerChoice) {
  if (getHumanChoice == "rock" && getComputerChoice == "paper") {
    console.log("Paper beats rock, You lost.");
    computerScore++;
  } else if (getHumanChoice == "paper" && getComputerChoice == "rock") {
    console.log("Paper beats rock, You win!");
    humanScore++;
  }
  if (getHumanChoice == "paper" && getComputerChoice == "scissor") {
    console.log("Scissor beats paper, You lose!");
    computerScore++;
  } else if (getHumanChoice == "scissor" && getComputerChoice == "paper") {
    console.log("Scissor beats paper, You win!");
    humanScore++;
  }
  if (getHumanChoice == "scissor" && getComputerChoice == "rock") {
    console.log("Rock beats scissor, You lost.");
    computerScore++;
  } else if (getHumanChoice == "rock" && getComputerChoice == "scissor") {
    console.log("Rock beats scissor, You win!");
    humanScore++;
  }
  if (
    (getHumanChoice == "rock" && getComputerChoice == "rock") ||
    (getHumanChoice == "paper" && getComputerChoice == "paper") ||
    (getHumanChoice == "scissor" && getComputerChoice == "scissor")
  ) {
    console.log("Its a tie.");
  }
}
var humanScore = 0;
var computerScore = 0;
console.log("The score is " + humanScore + " to " + computerScore);
