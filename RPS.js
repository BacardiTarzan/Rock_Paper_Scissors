let playerScore = 0;
let computerScore = 0;


function playRound(){
    let player = window.prompt();
    player = player.toLowerCase();

    let computer = ''; 
     switch (Math.floor(Math.random() * 3)){
        case 0:
            computer = 'rock'
            break;
        case 1:
            computer = 'paper'
            break;
        case 2: 
            computer = 'scissors'
            break;        
    }

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
    playerScore = 0;
    computerScore = 0;
    while ((playerScore || computerScore) < 5){
        playRound()
    }
    
    return computerScore + " vs " + playerScore;
}
console.log(playGame())

