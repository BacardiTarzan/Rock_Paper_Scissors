let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if (player == computer){
        return "Tie!";
    }
    else if (player == 'rock'){
        if (computer == 'scissors'){
            playerScore ++;
            return "You win! Rock beats Scissors!";
        }else if (computer == 'paper'){
            computerScore ++;
            return "You lose! Paper covers Rock!";
        }
    }else if (player == 'paper'){
         if (computer == 'rock'){
             playerScore ++;
             return "You win! Paper covers Rock!";
        }else if (computer == 'scissors'){
              computerScore ++;
              return "You lose! Scissors cut Paper!";
        }
    }else if (player == 'scissors'){
        if (computer == 'paper'){
            playerScore ++;
            return "You win! Scissors cut Paper!";
        } else if (computer == 'rock'){
            computerScore ++;
            return "you lose! Rock beats Scissors!"
        }
    } 
}
function playGame(){
    while ((playerScore || computerScore) < 5){
        playRound()
    }
    
    return computerScore;
}
console.log(playGame())

