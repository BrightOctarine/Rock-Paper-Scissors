const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const computerSelection = choices[Math.floor(Math.random() * 3)];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    const result = winnerCheck(playerSelection, computerSelection);
    if (result == "draw") {
        return `You Draw! ${playerSelection} draws with ${computerSelection}`
    }
    else if (result == "player") {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function winnerCheck(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "draw";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        return "player";
    }
    else {
        return "computer";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (winnerCheck(playerSelection, computerSelection) == "player") {
            playerScore++;
        }
        else if (winnerCheck(playerSelection, computerSelection) == "computer") {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log("The player is the winner!");
    }
    else if (playerScore < computerScore) {
        console.log("The computer is the winner!");
    }
    else {
        console.log("It\'s a draw!");
    }
}

function getPlayerChoice() {
    const selection = prompt("Rock Paper Scissors");
    const selectionInLower = selection.toLowerCase();
    return selectionInLower;
}

game()
