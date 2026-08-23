let humanScore = 0;
let computerScore = 0;
let round = 1;

function getComputerChoice() {
    let pick = Math.floor(Math.random() * 3) + 1; //1 = rock, 2 = paper, 3 = scissors.

    if (pick === 1) {
        return "rock";
    } else if (pick === 2) {
        return "paper";
    } else if (pick === 3) {
        return "scissors";
    }
}

function getHumanChoice() {
    let pick = prompt("ROCK? PAPER? SCISSORS?");
    pick = pick.toLowerCase();

    if (pick === "rock") {
        return "rock";
    } else if (pick === "paper") {
        return "paper";
    } else if (pick === "scissors") {
        return "scissors";
    } else {
        console.log("You have exited the game.");
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            console.log("Woah! a draw!");
        } else if (computerChoice === "paper") {
            console.log("You lose lol. paper defeats rock");
            computerScore++
        } else {
            console.log("You win! rock beats scissors");
            humanScore++
        }
    }

    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! paper beats rock");
            humanScore++
        } else if (computerChoice === "paper") {
            console.log("Woah! a draw!");
        } else {
            console.log("You lose lol. scissors defeats paper");
            computerScore++
        }
    }

    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose lol. rock defeats scissors");
            computerScore++
        } else if (computerChoice === "paper") {
            console.log("You win! scissors beat paper");
            humanScore++
        } else {
            console.log("Woah! a draw!");
        }
    }
}