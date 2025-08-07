function computerPlay () {
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
    let getRandomValue = Math.random();
    if (getRandomValue <= 0.33) {
        return rock;
    } else if (getRandomValue <= 0.66) {
        return paper;
    } else {
        return scissors;
    }
}

    let playerWin = 0;
    let computerWin = 0;
    let gameWinner = "";    

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.className;
        const computerChoice = computerPlay ();
        battleWinText.textContent = (playRound(playerSelection, computerChoice));
        playerWinText.textContent = "Your wins total: " + playerWin;
        computerWinText.textContent = "The computers wins total: " + computerWin;
        endGame();
    })
});

function playRound(playerSelection, computerSelection) {
    let tie = "It's a Tie! You chose: " + playerSelection + " And the Computer chose the same!";
    let paperBeatRock = "You win! You selected: " + playerSelection + " And the computer chose: " + computerSelection;
    let scissorsBeatPaper = "You win! You selected: " + playerSelection + " And the computer chose: " + computerSelection;
    let scissorsBeatPaperLoss = "You Lose! You selected: " + playerSelection + " And the computer chose: " + computerSelection;
    let paperBeatRockLoss = "You Lose! You selected: " + playerSelection + " And the computer chose: " + computerSelection;
    let rockBeatScissors = "You win! You selected: " + playerSelection + " And the computer chose: " + computerSelection;
    let rockBeatScissorsLoss = "You Lose! You selected: " + playerSelection + " And the computer chose: " + computerSelection;

    if (playerSelection === computerSelection) {
        return tie;
    }else if ((playerSelection == "Paper") && (computerSelection == "Rock")) {
        playerWin++
        return paperBeatRock;
    }else if ((playerSelection == "Rock") && (computerSelection == "Paper")) {
        computerWin++
        return paperBeatRockLoss;
    }else if ((playerSelection == "Scissors") && (computerSelection == "Paper")) {
        playerWin++
        return scissorsBeatPaper;
    }else if ((playerSelection == "Paper") && (computerSelection == "Scissors")) {
        computerWin++
        return scissorsBeatPaperLoss;
    }else if ((playerSelection == "Rock") && (computerSelection == "Scissors")) {
        playerWin++
        return rockBeatScissors;
    }else if ((playerSelection == "Scissors") && (computerSelection == "Rock")) {
        computerWin++
        return rockBeatScissorsLoss;
    }else {
        return "An Error in the code has occurred, how strange."
    }
}



// Creates DIV DOM
const container = document.querySelector('#container');
const resultDiv = document.createElement('div');
resultDiv.style.marginTop = "20px";
container.appendChild(resultDiv);

// Create player win tracking DOM
const playerWinText = document.createElement('p');
playerWinText.style.color ="green";
playerWinText.textContent = "Your win totals: " + playerWin
resultDiv.appendChild(playerWinText);

// Create Computer win track DOM
const computerWinText = document.createElement('p');
computerWinText.style.color = "red";
computerWinText.textContent = "Computer's win totals: " + computerWin;
resultDiv.appendChild(computerWinText);


// Create battle win track DOM
const battleWinText = document.createElement('p');
battleWinText.style.color = "blue";
battleWinText.textContent = "";
resultDiv.appendChild(battleWinText);

// Create Game win text DOM
const gameWinText = document.createElement('p');
gameWinText.style.color = "orange";
gameWinText.textContent = "";
resultDiv.appendChild(gameWinText);

// determine first to five
function endGame() {
    if (playerWin == 5) {
        gameWinner = "You Win!"
        gameWinText.textContent = gameWinner;
        
        //disable buttons
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        
        //create new dom button for replaying
        const playAgainButton = document.createElement("button");
        playAgainButton.textContent = "Play Again!";
        resultDiv.appendChild(playAgainButton);

        //if clicked
        playAgainButton.addEventListener('click', () => {
            location.reload();

        })

    } else if (computerWin == 5) {
        gameWinner = "You Lost!"
        gameWinText.textContent = gameWinner;
        
        //disable buttons
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        document.getElementById("3").disabled = true;
        
        //create new dom button for replaying
        const playAgainButton = document.createElement("button");
        playAgainButton.textContent = "Play Again!";
        resultDiv.appendChild(playAgainButton);

        //if clicked
        playAgainButton.addEventListener('click', () => {
            location.reload();
    });
}

}

