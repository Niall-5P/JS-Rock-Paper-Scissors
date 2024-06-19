/**
 * Declare constants for DOM elements
 * and possible choices
 */
const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const messages = document.getElementById("messages");
const choices = ["rock", "paper", "scissors"];

/**
 * Add event listener to all the buttons
 */
for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}


/**
 * The main game function. Accepts one parameter, which 
 * is the data-choice value of the selected button
 */
function playGame(playerChoice) {

    playerImage.src = `assets/images/${choices[playerChoice]}.jpeg`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 3);

    computerImage.src = `assets/images/${choices[computerChoice]}.jpeg`;
    computerImage.alt = choices[computerChoice];

    let result = checkWinner(choices[computerChoice], choices[playerChoice]);

    updateScores(result);
}

/**
 * Checks to see who the winner is, it accepts two strings as
 */
// Function to decide winner
function playRound(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    if (playerChoice === computerChoice) {
        resultDisplay.textContent = "It\'s a draw!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        resultDisplay.textContent = "You win!";
        playerScore++; // Increment player's score
    } else {
        resultDisplay.textContent = "Computer wins!";
        computerScore++; // Increment computer's score
    }
  
  
  }