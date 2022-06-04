var userPoints = 0;
var computerPoints = 0;
var draws = 0;
var endMatch = false;

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
            return "Paper beats Rock";
        } else if (computerSelection === "scissors") {
            userPoints++;
            return "Rock beats Scissors";
        }
    }

    if (playerSelection.toLowerCase() === "paper") {

        if (computerSelection === "scissors") {
            computerPoints++;
            return "Scissors beats Paper";
        } else if (computerSelection === "rock") {
            userPoints++;
            return "Paper beats Rock";
        }
    }

    if (playerSelection.toLowerCase() === "scissors") {

        if (computerSelection === "paper") {
            userPoints++;
            return "Scissors beats Paper";
        } else if (computerSelection === "rock") {
            computerPoints++;
            return "Rock beats Scissors";
        }
    }
    return;
}

function game() {

    const update = document.querySelector('.update');

    function clickRock() {
        if (!endMatch) {
            update.style.color = '#1e1e20';
            update.textContent = playRound("rock", computerPlay());
            checkScore();
        }
    }

    const rock = document.querySelector('.rock');
    rock.addEventListener('click', clickRock);

    function clickPaper() {
        if (!endMatch) {
            update.style.color = '#1e1e20';
            update.textContent = playRound("paper", computerPlay());
            checkScore();
        }
    }

    const paper = document.querySelector('.paper');
    paper.addEventListener('click', clickPaper);

    function clickScissors() {
        if (!endMatch) {
            update.style.color = '#1e1e20';
            update.textContent = playRound("scissors", computerPlay());
            checkScore();
        }
    }

    const scissors = document.querySelector('.scissors');
    scissors.addEventListener('click', clickScissors);
}

function checkScore() {

    const div = document.querySelector('.score');
    div.textContent = `Score: ${userPoints} - ${computerPoints} - ${draws}`;

    const divTwo = document.querySelector('.score-two');
    divTwo.textContent = `Score: ${userPoints} - ${computerPoints} - ${draws}`;
    

    if (userPoints === 5 || computerPoints === 5) {
        const final = document.querySelector('.final');
        document.querySelector('.reset').style.display = '';
        
        if (userPoints > computerPoints) {
            final.textContent = ('You won! 🏆');
        } else if (computerPoints > userPoints) {
            final.textContent = ('Sorry, you lost.');
        }

        endMatch = true;
    }

}

game();