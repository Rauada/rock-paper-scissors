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

//get the player`s move
function playerPlay() {
    return window.prompt("Choose your move:", "rock, paper, scissors").toLowerCase();
}

//plays a round of the game
function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
    playerSelection = playerPlay();

    if (computerSelection === "rock" && playerSelection === "paper") {
        playerScore ++;
        window.alert(`You Win! ${playerSelection} beats ${computerSelection}.`);
    }
    
    if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore ++;
        window.alert(`You Lose! ${computerSelection} beats ${playerSelection}.`);
    }

    if (computerSelection === "rock" && playerSelection === "rock") {
        window.alert("It`s a draw!");
    }

    if (computerSelection === "paper" && playerSelection === "scissors") {
        playerScore ++;
        window.alert(`You Win! ${playerSelection} beats ${computerSelection}.`);
    }
    
    if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore ++;
        window.alert(`You Lose! ${computerSelection} beats ${playerSelection}.`);
    }

    if (computerSelection === "paper" && playerSelection === "paper") {
        window.alert("It`s a draw!");
    }

    if (computerSelection === "scissors" && playerSelection === "rock") {
        playerScore ++;
        window.alert(`You Win! ${playerSelection} beats ${computerSelection}.`);
    }
    
    if (computerSelection === "scissors" && playerSelection === "paper") {
        computerScore ++;
        window.alert(`You Lose! ${computerSelection} beats ${playerSelection}.`);
    }

    if (computerSelection === "scissors" && playerSelection === "scissors") {
        window.alert("It`s a draw!");
    }

    //prints the player`s and computer`s score log
    window.alert(`Score is: You ${playerScore} x Computer ${computerScore}`);
}


playRound(playerSelection, computerSelection);
playRound(playerSelection, computerSelection);
playRound(playerSelection, computerSelection);
playRound(playerSelection, computerSelection);
playRound(playerSelection, computerSelection);