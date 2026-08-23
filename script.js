let humanScore = 0;
let computerScore = 0;

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
