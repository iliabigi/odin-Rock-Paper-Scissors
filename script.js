playGame();


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

        if (humanPick !== undefined) {
            playRound(humanPick, computerPick);
            round++;
        } else {
            return undefined;
        }
    }
    
    if (humanScore != computerScore) {
        let winner = (humanScore > computerScore) ? "YOU" : "COMPUTER"

        console.log("THE GAME IS OVER AND THE RESULT IS...");
        setTimeout(() => {
            console.log("--------------------------------");
            console.log(`your score: ${humanScore}`);
            console.log(`computer score: ${computerScore}`);
            console.log(`And the winner is: ${winner}!`);
            console.log("--------------------------------");
        }, 1000
    )
    } else {
        console.log("... The game is over but the result is tie...")
        console.log("Maybe try again?");
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock") {
            console.log("You picked rock.");
            if (computerChoice === "rock") {
                console.log("The computer picked... rock!");
                console.log("Woah! It's a draw!");

                alert("The computer picked... rock!");
                alert("Woah! It's a draw!");

                return true;
                
            } else if (computerChoice === "paper") {
                console.log("The computer picked... paper!");
                console.log("And you lose lol. paper defeats rock");

                alert("The computer picked... paper!");
                alert("And you lose lol. paper defeats rock");
                computerScore++;

                return true;

            } else {
                console.log("The computer picked... scissors");
                console.log("You win! rock beats scissors");

                alert("The computer picked... scissors");
                alert("You win! rock beats scissors");
                humanScore++;

                return true;

            }
        } 
        
        else if (humanChoice === "paper") {
            console.log("You picked paper");
            if (computerChoice === "rock") {
                console.log("The computer picked... rock!");
                console.log("You win! paper beats rock");

                alert("The computer picked... rock!");
                alert("You win! paper beats rock");
                humanScore++;

                return true;

            } else if (computerChoice === "paper") {
                console.log("The computer picked... paper!");
                console.log("Woah! It's a draw!");

                alert("The computer picked... paper!");
                alert("Woah! It's a draw!");

                return true;
            } else {
                console.log("The computer picked... scissors");
                console.log("And you lose lol. scissors defeats paper");

                alert("The computer picked... scissors");
                alert("And you lose lol. scissors defeats paper");
                computerScore++;

                return true;

            }
        } 
        
        else if (humanChoice === "scissors") {
            console.log("You picked scissors");
            if (computerChoice === "rock") {
                console.log("The computer picked... rock!");
                console.log("And you lose lol. rock defeats scissors");

                alert("The computer picked... rock!");
                alert("And you lose lol. rock defeats scissors");
                computerScore++;

                return true;

            } else if (computerChoice === "paper") {
                console.log("The computer picked... paper!");
                console.log("You win! scissors beat paper");

                alert("The computer picked... paper!");
                alert("You win! scissors beat paper");
                humanScore++;

                return true;

            } else {
                console.log("The computer picked... scissors");
                console.log("Woah! It's a draw!");

                alert("The computer picked... scissors");
                alert("Woah! It's a draw!");

                return true;
            }
        } 

        else {
            return false;
        }
    }
}