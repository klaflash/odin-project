var userPoints = 0;
var computerPoints = 0;
var draws = 0;

//randomly return Rock, Paper, or Scissors
function computerPlay() {
    const value = Math.random() * 3;

    if (value <=1) {
        return "rock"
    } else if (value <=2) {
        return "paper"
    } else {
        return "scissors"
    } 
}

//return the winner in the form of a string
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        draws++;
        return "Draw";
    }
    
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "paper") {
            computerPoints++;
            return "You Lose! Paper beats Rock";
        } else if (computerSelection === "scissors") {
            userPoints++;
            return "You Win! Rock beats Scissors";
        }
    }

    if (playerSelection.toLowerCase() === "paper") {

        if (computerSelection === "scissors") {
            computerPoints++;
            return "You Lose! Scissors beats Paper";
        } else if (computerSelection === "rock") {
            userPoints++;
            return "You Win! Paper beats Rock";
        }
    }

    if (playerSelection.toLowerCase() === "scissors") {

        if (computerSelection === "paper") {
            userPoints++;
            return "You Win! Scissors beats Paper";
        } else if (computerSelection === "rock") {
            computerPoints++;
            return "You Loose! Rock beats Scissors";
        }
    }

    return "Error. Please type rock, paper, or scissors."
}

//play a 5 round game
function game() {

    for (let i = 1; i <= 5; i++) {
        console.log(`Game ${i}: ${playRound(prompt("Please type rock, paper, or scissors."), computerPlay())}`);
    }

    console.log(`Your record after 5 games: ${userPoints}-${computerPoints}-${draws}.`);

    if (userPoints > computerPoints) {
        console.log("You won!");
    } else if (computerPoints > userPoints) {
        console.log("Sorry, you lost.")
    } else {
        console.log("Draw");
    }
}

game();