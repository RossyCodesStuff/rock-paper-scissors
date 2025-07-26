let choices = ("Rock", "Paper", "Scissor");

function getComputerChoice() {}
const randomNumber = Math.floor(Math.random() * 3) + 1;
if (randomNumber === 1) {
  console.log("Rock");
}
if (randomNumber === 2) {
  console.log("Paper");
}
if (randomNumber === 3) {
  console.log("Scissor");
}

function getHumanChoice() {}
let textInput = prompt("Please enter Rock, Paper or Scissors in text");
if (textInput === null) {
  console.log("Maybe try entering some text");
}
if (textInput === "Rock") {
  console.log("You chose Rock!");
}
if (textInput === "Paper") {
  console.log("You chose Paper!");
}
if (textInput === "Scissor") {
  console.log("You chose Scissor!");
}
