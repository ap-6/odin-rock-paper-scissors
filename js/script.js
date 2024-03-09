function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3); //random number between 0-2
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

    //ensure the input is valid 
    while (checkPlayerChoice(playerChoice) === false) { 
        playerChoice = prompt("Invalid input. Try again. \nEnter one of the following: rock, paper, scissors.")
        playerChoice = playerChoice.toLowerCase();
    }

    return playerChoice;
}

function checkPlayerChoice(playerChoice) { //ensures player input is valid
    if ((playerChoice === "rock") || (playerChoice === "paper") || (playerChoice === "scissors"))
        return true;
    else
        return false;
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let roundResult;
    
    //plays 5 rounds and keeps score
    for (let count = 1; count < 6; count++) {
        //get choices for round
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();

        //determine round winner
        roundResult = playRound(computerChoice, playerChoice);

        //output round results
        alert(outputRoundResults(computerChoice, playerChoice, roundResult, count));

        //adjust scores
        if (roundResult[4] === "w") //player wins
            playerScore++;
        else if (roundResult[4] === "l") //player loses
            computerScore++;
    }
    
    //compare final scores and outputs game results
    return outputGameResults(computerScore, playerScore);
}

function outputRoundResults(computerChoice, playerChoice, roundResult, roundCount) { //shows details of roun
    let output = "Round " + roundCount + ": ";
    output += "\nComputer choice: " + computerChoice;
    output += "\nPlayer choice: " + playerChoice;
    output += "\nRound result: " + roundResult;

    return output;
}

function outputGameResults(computerScore, playerScore) {
    if (playerScore > computerScore) { //player wins
        return "You win the game! You scored " + playerScore + 
               " and the computer scored " + computerScore + ".";
    }
    else if (playerScore < computerScore) { //computer wins
        return "You lose the game! You scored " + playerScore + 
               " and the computer scored " + computerScore + ".";
    }
    else //tie
        return "You tied the game! You both scored " + playerScore + "."
}

alert(playGame());


