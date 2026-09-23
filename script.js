const ROCK_IMAGE = "https://i.pinimg.com/736x/f5/8d/54/f58d5428ab817b5281c4c06e68539b77.jpg";
let selector = document.querySelector("#rock");
selector.src = ROCK_IMAGE;

const PAPER_IMAGE = "https://i.pinimg.com/736x/b1/4e/44/b14e44a226cbe207468a2a6221e11f19.jpg";
selector = document.querySelector("#paper");
selector.src = PAPER_IMAGE;

const SCISSORS_IMAGE = "https://i.pinimg.com/736x/d0/e4/e3/d0e4e3d5b45f15ef6cb8538ac6b71c12.jpg";
selector = document.querySelector("#scissors");
selector.src = SCISSORS_IMAGE;


let round = 0;
let humanScore = 0;
let computerScore = 0;


const buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
    btn.addEventListener("click", e => {
        if (round < 5) {
            round++;

            //getting human & compouter choice and starting the round with PlayRound function
            let humanChoice = e.target.textContent;
            humanChoice = humanChoice.toLowerCase();
            const botChoice = getComputerChoice();
            let result = playRound(humanChoice, botChoice);

            //displaying result in the score board and saving the current score
            if (result === 1) {
                const selectHumanScore = document.querySelector("#scoreBoard #humanScore");
                selectHumanScore.append("*");
                humanScore++;
            } else if (result === 3) {
                const selectComputerScore = document.querySelector("#scoreBoard #computerScore");
                selectComputerScore.append("*");
                computerScore++;
            } else {
                const selectComputerScore = document.querySelector("#scoreBoard #drawCount");
                selectComputerScore.append("*");
            }

            const head = document.querySelector(".header");

            //Creating an element to display the final result
            //class: .endMessage
            if (round === 5) {
                const endMessage = document.createElement("h1");
                endMessage.classList.add("endMessage");
                if (humanScore > computerScore) {
                    endMessage.textContent = "GAME OVER! YOU'VE WON :D";
                    endMessage.style.color = "aqua";
                } else if (computerScore > humanScore) {
                    endMessage.textContent = "GAME OVER! YOU'VE LOST! BETTER LUCK NEXT TIME.";
                    endMessage.style.color = "red";
                } else {
                    endMessage.textContent = "Ahh... tis a brutal stalemate at last... tarnished..."
                    endMessage.style.color = "gray";
                }
                head.prepend(endMessage);
                endMessage.scrollIntoView();

                const restartMessage = document.createElement("p");
                const status = document.querySelector(".status");
                restartMessage.textContent = "The game has finished, press any button to restart."
                status.appendChild(restartMessage);
            }

            //Creating an element to display the current round
            //round class: .roundCount
            const roundHeader = document.createElement("h1");
            roundHeader.classList.add("roundCount");
            roundHeader.textContent = `ROUND ${round}`;

            roundHeader.style.color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;

            const oldRound = document.querySelector(".header .roundCount");
            if (oldRound !== null) oldRound.replaceWith(roundHeader);
            else head.appendChild(roundHeader);

        } else {
            //start the game over if it passes round 5
            round = 0;
            alert("Starting over...");
            location.reload();
        }
    });
});

//a function to randomly color the round message at the header
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

//PlayRound function declares the result of the rps game with the human and computer picks given to it as arguments.
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