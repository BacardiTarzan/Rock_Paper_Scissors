let playerScore = 0;
let computerScore = 0;


function playRound(player){
    const gameFeed = document.querySelector('#gameFeed');
    const scoreSheet = document.querySelector('#scoreSheet')

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
        gameFeed.textContent = "Tie!";
    }
    else if (player == 'rock'){
        if (computer == 'scissors'){
            playerScore ++;
            gameFeed.textContent = "You Win! Rock beats Scissors!";
        }else if (computer == 'paper'){
            computerScore ++;
            gameFeed.textContent = "You Lose! Paper covers Rock!";
        }
    }else if (player == 'paper'){
         if (computer == 'rock'){
             playerScore ++;
             gameFeed.textContent = "You Win! Paper covers Rock!";
        }else if (computer == 'scissors'){
              computerScore ++;
              gameFeed.textContent = "You Lose! Scissors cut Paper!";
        }
    }else if (player == 'scissors'){
        if (computer == 'paper'){
            playerScore ++;
            gameFeed.textContent = "You Win! Scissors cut Paper!";
        } else if (computer == 'rock'){
            computerScore ++;
            gameFeed.textContent = "You Lose! Rock beats Scissors!"
        }
    } 
    scoreSheet.textContent = playerScore + ' ' + computerScore
    if (playerScore >= 5){
        gameFeed.textContent = 'You won the Game!'
    }else if(computerScore >= 5){
        gameFeed.textContent = 'You lost the Game!'
    }
}
/*function playGame(){
    playerScore = 0;            code for rounds
    computerScore = 0;
    while ((playerScore || computerScore) < 5){
        playRound()
    }
    
    gameFeed.textContent = computerScore + " vs " + playerScore;
}*/
console.log(playRound())  

