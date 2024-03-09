function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0)
        return "rock";
    else if (computerChoice === 1)
        return "paper";
    else    
        return "scissors";
}

function playRound(computerSelection, playerSelection) {
    //tie
    if (computerSelection === playerSelection) 
        return "Tie! Both players chose " + playerSelection;
    //computer wins
    else if ((computerSelection === "rock" && playerSelection === "scissors")
            ||(computerSelection === "paper" && playerSelection === "rock")
            ||(computerSelection === "scissors" && playerSelection === "paper"))
        return "You lose the round! " + computerSelection + " beats " + playerSelection + ".";
    //player wins
    else
        return "You win the round! " + playerSelection + " beats " + computerSelection;
}

function getPlayerChoice() {
    let playerChoice = prompt("Enter one of the following: rock, paper, scissors.")
    playerChoice = playerChoice.toLowerCase();

    return playerChoice;
}

function checkPlayerChoice(playerChoice) { //ensures player input is valid
    if ((playerChoice === "rock") || (playerChoice === "paper") || (playerChoice === "scissors"))
        return true;
    else
        return false;
}

function playGame (playRoundFunction, computerChoice, playerChoice) {
    let playerScore = 0;
    let computerScore = 0;
    let roundResult;
    
    //plays 5 rounds and keeps score
    for (let count = 0; count < 5; count++) {
        roundResult = playRoundFunction(computerChoice, playerChoice);
        if (roundResult[4] === "w") //player wins
            playerScore++;
        else if (roundResult[4] === "l") //player loses
            computerScore++;
    }
    
    //compare scores
    if (playerScore > computerScore) {
        return "You win the game! You scored " + playerScore + 
               " and the computer scored " + computerScore + ".";
    }
    else if (playerScore < computerScore) {
        return "You lose the game! You scored " + playerScore + 
               " and the computer scored " + computerScore + ".";
    }
    else
        return "You tied! You both scored " + playerScore + "."
}

//get user input
let playerChoice = getPlayerChoice();
//ensure the input is valid
while (checkPlayerChoice(playerChoice) === false) 
    playerChoice = getPlayerChoice();

//get computer input
let computerChoice = getComputerChoice();

let roundResult = playRound(computerChoice, playerChoice);

let outputComputerChoice = document.getElementById("computerOutput");
let outputPlayerChoice = document.getElementById("playerOutput");
let outputRound = document.getElementById("roundOutput");

outputComputerChoice.textContent = "computer choice: " + computerChoice;
outputPlayerChoice.textContent = "player choice: " + playerChoice;
outputRound.textContent = "round result: " + roundResult;
