const getUserChoice = userInput => {
    userInput = prompt("Please type in your choice of either 'rock', 'paper' or 'scissors")
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log("Error please type a selected reponse only.")
    }
};

const getComputerChoice = () => {
    const num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return "rock"
    } else if (num === 1) {
        return 'paper'
    } else if (num === 2) {
        return 'scissors'
    }
};
let userScore = 0;
let computerScore = 0;
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
        return 'You blew up computer, obviously you win!'
    };
    if (userChoice === computerChoice) {
        return "The game is a tie";
    };

    if (userChoice === 'rock' && computerChoice === 'paper') {
        computerScore++
        return "The computer won!"
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        userScore++
        return "You Won!"
    };

    if (userChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++
        return "The computer won!"
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        userScore++
        return "You won!"
    }

    if (userChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++
        return "The computer won!"
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        userScore++
        return "You won!"
    };

};

let gameRound = 1;

function playGame() {
    if (gameRound <= 5) {
        const userChoice = getUserChoice();
        const computerChoice = getComputerChoice();
        determineWinner(userChoice, computerChoice);
        gameRound++;
        console.log(`Your score is: ${userScore} Computer: ${computerScore}`)
        playGame();

    } else if (gameRound === 6) {
        if (userScore > computerScore) {
            console.log("You win!")
        } else if (userScore < computerScore) {
            console.log("You lose!")
        } else {
            console.log("Its a draw!");
        }
    }
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    console.log('You chose: ' + userChoice);
    console.log('Computer chose: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();
console.log("The score is: " + userScore + ":" + computerScore)
console.log(calculateWinningScore(userScore, computerScore));
