// playGame(); //Calls a function for playing the rock, paper and scissors game.
const ROCK_IMAGE = "https://i.pinimg.com/736x/f5/8d/54/f58d5428ab817b5281c4c06e68539b77.jpg";
let selector = document.querySelector("#rock");
selector.src = ROCK_IMAGE;

const PAPER_IMAGE = "https://i.pinimg.com/736x/b1/4e/44/b14e44a226cbe207468a2a6221e11f19.jpg";
selector = document.querySelector("#paper");
selector.src = PAPER_IMAGE;

const SCISSORS_IMAGE = "https://i.pinimg.com/736x/d0/e4/e3/d0e4e3d5b45f15ef6cb8538ac6b71c12.jpg";
selector = document.querySelector("#scissors");
selector.src = SCISSORS_IMAGE;








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

//Returns undefined if you don't enter any of the options as an input,
//which leads to exiting the game later in the playGame function
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

//playGame function.
//The game plays in rounds of five and each round plays in a function called playRound,
//which is invoked inside the playGame function
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
            return undefined; //if humanPick is undefined, return the function and end the game.
        }
    }

    if (humanScore != computerScore) {
        let winner = humanScore > computerScore ? "YOU" : "COMPUTER";

        console.log("THE GAME IS OVER AND THE RESULT IS...");
        setTimeout(() => {
            console.log("--------------------------------");
            console.log(`your score: ${humanScore}`);
            console.log(`computer score: ${computerScore}`);
            console.log(`And the winner is: ${winner}!`);
            console.log("--------------------------------");
        }, 1000);
    } else {
        console.log("... The game is over but the result is tie...");
        console.log("Maybe try again?");
    }

    //playRound function to determin each round's result.
    //it returns boolean values only for debugging, the return values have no other use.
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
    } else if (humanChoice === "paper") {
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
    } else if (humanChoice === "scissors") {
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
    } else {
        return false;
    }
}
