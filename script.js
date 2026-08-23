

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

    if (pick === "rock" || pick === "r") {
        return "rock";
    } else if (pick === "paper" || pick === "p") {
        return "paper";
    } else if (pick === "scissors" || pick === "s") {
        return "scissors";
    } else {
        console.log("You have exited the game.");
    }
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    let round = 1;

    while (round <= 5) {
        let humanPick = getHumanChoice();
        let computerPick = getComputerChoice();

        playRound(humanPick, computerPick);
        round++;
    }
    
    if (humanScore != computerScore) {
        let winner = (humanScore > computerScore) ? "YOU" : "COMPUTER"

        console.log(`THE GAME IS OVER AND THE WINNER IS... ${winner}`);
    }
  
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock") {
            if (computerChoice === "rock") {
                console.log("Woah! a draw!");
            } else if (computerChoice === "paper") {
                console.log("You lose lol. paper defeats rock");
                computerScore++;
            } else {
                console.log("You win! rock beats scissors");
                humanScore++;
            }
        } 
        
        else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                console.log("You win! paper beats rock");
                humanScore++;
            } else if (computerChoice === "paper") {
                console.log("Woah! a draw!");
            } else {
                console.log("You lose lol. scissors defeats paper");
                computerScore++;
            }
        } 
        
        else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                console.log("You lose lol. rock defeats scissors");
                computerScore++;
            } else if (computerChoice === "paper") {
                console.log("You win! scissors beat paper");
                humanScore++;
            } else {
                console.log("Woah! a draw!");
            }
        }
    }
}