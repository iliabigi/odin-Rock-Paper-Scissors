let round = 0;
let humanScore = "";
let computerScore = "";

const ROCK_IMAGE = "https://i.pinimg.com/736x/f5/8d/54/f58d5428ab817b5281c4c06e68539b77.jpg";
let selector = document.querySelector("#rock");
selector.src = ROCK_IMAGE;

const PAPER_IMAGE = "https://i.pinimg.com/736x/b1/4e/44/b14e44a226cbe207468a2a6221e11f19.jpg";
selector = document.querySelector("#paper");
selector.src = PAPER_IMAGE;

const SCISSORS_IMAGE = "https://i.pinimg.com/736x/d0/e4/e3/d0e4e3d5b45f15ef6cb8538ac6b71c12.jpg";
selector = document.querySelector("#scissors");
selector.src = SCISSORS_IMAGE;

const buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
    btn.addEventListener("click", e => {
        if (round < 5) {
            round++;

            let humanChoice = e.target.textContent;
            humanChoice = humanChoice.toLowerCase();
            const botChoice = getComputerChoice();
            let result = playRound(humanChoice, botChoice);

            if (result === 1) {
                humanScore += "*";
            } else if (result === 3) {
                computerScore += "*";
            }

            //round class: .roundCount
            const head = document.querySelector(".header");
            const roundHeader = document.createElement("h1");
            roundHeader.classList.add("roundCount");
            roundHeader.textContent = `ROUND ${round}`;

            roundHeader.style.color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;

            const oldRound = document.querySelector(".header h1");
            if (oldRound !== null) oldRound.replaceWith(roundHeader);
            else head.appendChild(roundHeader);

            //class: .humanSB
            const humanScoreBoard = document.createElement("h3");
            humanScoreBoard.textContent = `Human: ${humanScore}`; //display the score
            humanScoreBoard.classList.add("humanSB"); 
            const oldHumanScoreBoard = document.querySelector(".humanSB"); //update the element if it existed
            if (oldHumanScoreBoard !== null) oldHumanScoreBoard.replaceWith(humanScoreBoard);
            else head.appendChild(humanScoreBoard);


            //class: .computerSB
            const computerScoreBoard = document.createElement("h3");
            computerScoreBoard.textContent = `Computer: ${computerScore}`;
            computerScoreBoard.classList.add("computerSB");
            const oldComputerScoreBoard = document.querySelector(".computerSB");
            if (oldComputerScoreBoard !== null) oldComputerScoreBoard.replaceWith(computerScoreBoard);
            else head.appendChild(computerScoreBoard);

        } else {
            round = 0;
            alert("Starting over...");
            location.reload();
        }
    });
});


function randomColor() {
    let res = Math.floor(Math.random() * 256);
    return res
}


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
    // let humanScore = 0;
    // let computerScore = 0;
    // let round = 1;

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
}

//1 = win
//2 = draw
//3 = lose
function playRound(humanChoice, computerChoice) {
    const div = document.querySelector(".status");
    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {

            const para = document.createElement("p");
            para.innerHTML = `Round ${round} <br> You've chosed ${humanChoice} & the computer chose ${computerChoice}... <br>
                        YOU WIN!!!! ${humanChoice.toUpperCase()} BEATS ${computerChoice.toUpperCase()}!!!`;
            div.appendChild(para);

            return 1;
    } 
    
    else if ((humanChoice === "rock" && computerChoice === "rock") ||
             (humanChoice === "paper" && computerChoice === "paper") ||
             (humanChoice === "scissors" && computerChoice === "scissors")) {

                const para = document.createElement("p");
                para.innerHTML = `Round ${round} <br> You've chosed ${humanChoice} & the computer chose ${computerChoice}... <br>
                        Woah... It's a draw!`;
                div.appendChild(para);

                return 2;
    } 
    
    else {
        const para = document.createElement("p");
        para.innerHTML = `Round ${round} <br> You've chosed ${humanChoice} & the computer chose ${computerChoice}... <br>
                          You've lost! ${computerChoice} beats ${humanChoice}... better luck next time!`;
        div.appendChild(para);

        return 3;
    }
}
console.log(round);