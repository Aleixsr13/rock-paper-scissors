let computerScore = 0;
let playerScore = 0;
const buttons = document.querySelectorAll("input");

function computerPlay() {
  let moves = ["Rock", "Paper", "Scissors"];
  return moves[Math.floor(Math.random() * moves.length)];
}

function playRound(playerSelection) {
  let computerSelection = computerPlay();
  let result = "";

  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    playerScore++;
    result = `You Win! ${playerSelection} beats ${computerSelection} <br><br>Score: Player ${playerScore} - ${computerScore} Computer`;
    if (playerScore === 5) {
      result += "<br><br><h2>You have won!</h2>";
      disableButtons();
    }
  } else if (playerSelection === computerSelection) {
    result = `It's a draw. You both chose ${playerSelection} <br><br>Score: Player ${playerScore} - ${computerScore} Computer`;
  } else {
    computerScore++;
    result = `You Lose! ${computerSelection} beats ${playerSelection} <br><br>Score: Player ${playerScore} - ${computerScore} Computer`;
    if (computerScore === 5) {
      result += "<br><br><h2>You lost!</h2>";
      disableButtons();
    }
  }

  document.getElementById("results").innerHTML = result;
  return;
}

function disableButtons() {
  buttons.forEach((e) => {
    e.disabled = true;
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    playRound(button.value);
  });
});
