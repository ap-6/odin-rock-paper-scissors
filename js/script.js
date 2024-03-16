function getComputerChoice() {
    let computerRoll = Math.floor(Math.random() * 3); //random number between 0-2
    
    if (computerRoll === 0)
        return "rock";
    else if (computerRoll === 1)
        return "paper";
    else    
        return "scissors";
}

function getRoundOutcome(computerSelection, playerSelection) {
    //tie
    if (computerSelection === playerSelection) 
        return "Tie! Both players chose " + playerSelection + ".";
    //computer wins
    else if ((computerSelection === "rock" && playerSelection === "scissors")
            ||(computerSelection === "paper" && playerSelection === "rock")
            ||(computerSelection === "scissors" && playerSelection === "paper"))
        return "You lose the round! " + titleCase(computerSelection) + " beats " + 
                playerSelection + ".";
    //player wins
    else
        return "You win the round! " + titleCase(playerSelection) + " beats " + 
                computerSelection  + ".";
}

function getPlayerChoice(target){
    switch (target.id) {
        case "rock":
            return "rock";
        
        case "paper":
            return "paper";
        
        case "scissors":
            return "scissors";
    }
}

function playGame() {
    let shapeChoice = document.querySelector("#shape-list");

    let playerChoice = document.querySelector("#player-choice");
    let playerScore = document.querySelector("#player-score");

    let computerChoice = document.querySelector("#computer-choice");
    let computerScore = document.querySelector("#computer-score");

    let roundOutcome = document.querySelector("#round-outcome");
    let roundCount = document.querySelector("#round-count");
    let count = 1;
    roundCount.textContent = count;
    
    let gameOutcome = document.querySelector("#game-outcome");
    let gameRestartBtn = document.createElement("button");
    gameRestartBtn.textContent = "Restart game";
    let gameRestart = document.querySelector("#restart-game");

    shapeChoice.addEventListener("click", (event) => {
        let target = event.target;

        if(target.tagName === "BUTTON") {
            //active game
            if (+playerScore.textContent < 5 && +computerScore.textContent < 5) { 
                playerChoice.textContent = getPlayerChoice(target);
                computerChoice.textContent = getComputerChoice();

                roundOutcome.textContent = getRoundOutcome(computerChoice.textContent, 
                                                        playerChoice.textContent);
            
                adjustScores(playerScore, computerScore, roundOutcome);
                roundCount.textContent = ++count;
            }
            //end game
            if (+playerScore.textContent === 5 || +computerScore.textContent === 5) {
                gameOutcome.textContent = getGameOutcome(playerScore, computerScore);
                gameRestart.appendChild(gameRestartBtn);
            }
                
        }
    });

    
}

function adjustScores(playerScore, computerScore, roundOutcome) {
    //adjust scores based on roundResult string
    if (roundOutcome.textContent[4] === "w") {
        playerScore.textContent = +playerScore.textContent + 1;
    }
    else if (roundOutcome.textContent[4] === "l") {
        computerScore.textContent = +computerScore.textContent + 1;
    }
}

function getGameOutcome(playerScore, computerScore) {
    let playerScoreInt = +playerScore.textContent;
    let computerScoreInt = +computerScore.textContent;

    if (playerScoreInt > computerScoreInt) { //player wins
        return "You win the game! You scored " + playerScoreInt + 
               " and the computer scored " + computerScoreInt + ".";
    }
    else if (playerScoreInt < computerScoreInt) { //computer wins
        return "You lose the game! You scored " + playerScoreInt + 
               " and the computer scored " + computerScoreInt + ".";
    }
    else //tie
        return "You tied the game! You both scored " + playerScoreInt + "."
}

function titleCase(text) {
    return text.substring(0, 1).toUpperCase() + text.substring(1);
}

playGame();

/* 
function checkPlayerChoice(playerChoice) { //ensures player input is valid
    if ((playerChoice === "rock") || 
        (playerChoice === "paper") || 
        (playerChoice === "scissors"))
        return true;
    else
        return false;
}

function getPlayerChoiceOLD() {
    let playerChoice = prompt("Enter one of the following: rock, paper, scissors.")
    playerChoice = playerChoice.toLowerCase();

    //ensure the input is valid 
    while (checkPlayerChoice(playerChoice) === false) { 
        playerChoice = prompt("Invalid input. Try again. \n" + 
                              "Enter one of the following: rock, paper, scissors.")
        playerChoice = playerChoice.toLowerCase();
    }

    return playerChoice;
}




let shapeChoice = document.querySelector("#shape-list");
let playerChoice = document.querySelector("#player-choice");

shapeChoice.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.id) {
        case "rock":
            playerChoice.textContent += "rock";
            break;
        
        case "paper":
            playerChoice.textContent += "paper";
            break;
        
        case "scissors":
            playerChoice.textContent += "scissors";
            break;
    }
});

*/