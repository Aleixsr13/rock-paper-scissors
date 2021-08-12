function computerPlay(){
    let move = ["Rock", "Paper", "Scissors"];
    return move[Math.floor(Math.random()*move.length)];
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection){
    if(playerSelection === "rock"){
        if(computerSelection === "Scissors"){
            playerScore ++;
            return `You Win! Rock beats Scissors.
Score: Player ${playerScore} - ${computerScore} Computer`;
        }
        else if (computerSelection === "Paper"){
            computerScore++;
            return `You Lose! Paper beats Rock.
Score: Player ${playerScore} - ${computerScore} Computer`;
        }
        else {
            return `It's a draw.
Score: Player ${playerScore} - ${computerScore} Computer`;
        }
    }

    if(playerSelection === "paper"){
        if(computerSelection === "Rock"){
            playerScore++;
            return `You Win! Paper beats Rock.
Score: Player ${playerScore} - ${computerScore} Computer`;
        }
        else if (computerSelection === "Scissors"){
            computerScore++;
            return `You Lose! Scissors beats Paper.
Score: Player ${playerScore} - ${computerScore} Computer`;
        }
        else {
            return `It's a draw.
Score: Player ${playerScore} - ${computerScore} Computer`;
        }
    }

    if(playerSelection === "scissors"){
        if(computerSelection === "Paper"){
            playerScore++;
            return `You Win! Scissors beats Paper.
Score: Player ${playerScore} - ${computerScore} Computer`;
        }
        else if (computerSelection === "Rock"){
            computerScore++;
            return `You Lose! Rock beats Scissors.
Score: Player ${playerScore} - ${computerScore} Computer`;
        }
        else {
            return `It's a draw.
Score: Player ${playerScore} - ${computerScore} Computer`;
        }
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Type Rock, Paper or Scissors");
        playerSelection = playerSelection.toLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }

    if(playerScore > computerScore){
        console.log(`You have won! 
Final score is: ${playerScore} - ${computerScore}`)
    }
    else if(playerScore < computerScore){
        console.log(`You lost! 
Final score is: ${playerScore} - ${computerScore}`)
    }
    else{
        console.log(`You tied.
Final score is: ${playerScore} - ${computerScore}`)
    }
}

game();
