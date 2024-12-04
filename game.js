// My JavaScript Code for My Rock, Papper, Scissors Game

// This is my first segment to Select elements
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultDisplay = document.getElementById("result");
const messageDisplay = document.querySelector("p");
const replayButton = document.querySelector(".replay-btn");

let userScore = 0;
let computerScore = 0;

// Here are my array choices sir
const choices = ["rock", "paper", "scissors"];

// My function to get computer's choice sir
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Here is my function to determine winner
function playRound(userChoice) {
  const computerChoice = getComputerChoice();

  // This segment is to determine the winner sir
  if (userChoice === computerChoice) {
    messageDisplay.textContent = `It's a tie! You both chose ${userChoice}`;
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore++;
    messageDisplay.textContent = `You win this round! You chose ${userChoice}, computer chose ${computerChoice}`;
  } else {
    computerScore++;
    messageDisplay.textContent = `Computer wins this round! You chose ${userChoice}, computer chose ${computerChoice}`;
  }

  // This will update the score display sir
  resultDisplay.textContent = `${userScore} : ${computerScore}`;

  // This section is to check for the overall winner
  if (userScore === 5) {
    messageDisplay.textContent = "Congratulations! You won the game!";
    disableButtons();
  } else if (computerScore === 5) {
    messageDisplay.textContent = "Computer won the game! Better luck next time.";
    disableButtons();
  }
}

// Here is my function to disable buttons after game ends sir
function disableButtons() {
  rockButton.removeEventListener("click", handleClick);
  paperButton.removeEventListener("click", handleClick);
  scissorsButton.removeEventListener("click", handleClick);
}

//Here is also my function to handle button clicks sir
function handleClick(event) {
  const userChoice = event.target.id; // Get the ID of the clicked button
  playRound(userChoice);
}

// This one is to add event listeners to buttons
rockButton.addEventListener("click", handleClick);
paperButton.addEventListener("click", handleClick);
scissorsButton.addEventListener("click", handleClick);

//This aspect is for replay button functionality sir
replayButton.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  resultDisplay.textContent = "0 : 0";
  messageDisplay.textContent = "Click a button below to make your choice:";
  rockButton.addEventListener("click", handleClick);
  paperButton.addEventListener("click", handleClick);
  scissorsButton.addEventListener("click", handleClick);
});
