//console.log("Hello World");

//define the playing options
const options = ['rock', 'paper', 'scissors'];
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

//randomly generates the computer`s play
function computerPlay(){
    return options[Math.floor(Math.random() * options.length)];
}

// //get the player`s move
// function playerPlay() {
//     return window.prompt("Choose your move:", "rock, paper, scissors").toLowerCase();
// }

//plays a round of the game
function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();

    if (computerSelection === "rock" && playerSelection === "paper") {
        playerScore ++;
        roundInfo.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
    }
    
    if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore ++;
        roundInfo.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }

    if (computerSelection === "rock" && playerSelection === "rock") {
        roundInfo.textContent = "It's a draw!";
    }

    if (computerSelection === "paper" && playerSelection === "scissors") {
        playerScore ++;
        roundInfo.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
    }
    
    if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore ++;
        roundInfo.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }

    if (computerSelection === "paper" && playerSelection === "paper") {
        roundInfo.textContent = "It's a draw!";
    }

    if (computerSelection === "scissors" && playerSelection === "rock") {
        playerScore ++;
        roundInfo.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
    }
    
    if (computerSelection === "scissors" && playerSelection === "paper") {
        computerScore ++;
        roundInfo.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }

    if (computerSelection === "scissors" && playerSelection === "scissors") {
        roundInfo.textContent = "It's a draw!";
    }

    //prints the player`s and computer`s score log
    if (playerScore === 5) {
        score.textContent = `You win!!! Final score is: You ${playerScore} x Computer ${computerScore}`;
    } else if (computerScore === 5) {
        score.textContent = `You lose!!! Final score is: You ${playerScore} x Computer ${computerScore}`;
    } else {
        score.textContent = `Score is: You ${playerScore} x Computer ${computerScore}`;
    }
}




const rock = document.getElementById('rock');
rock.addEventListener('click', function(e) {
    let playerPlay = 'rock';
    playRound(playerPlay, computerPlay);
});

const paper = document.getElementById('paper');
paper.addEventListener('click', function(e) {
    let playerPlay = 'paper';
    playRound(playerPlay, computerPlay);
});

const scissors = document.getElementById('scissors');
scissors.addEventListener('click', function(e) {
    let playerPlay = 'scissors';
    playRound(playerPlay, computerPlay);
});

const roundInfo = document.querySelector('.roundInfo');
const score = document.querySelector('.score');