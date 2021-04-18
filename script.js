let playerScore = 0;
let computerScore = 0;

const commands = [
    "rock",
    "paper",
    "scissors"
];

//Returns computer choice
function computerChoice() {
    let randomNum = Math.floor(Math.random() * commands.length);
    let resultC = commands[randomNum];
    return resultC;
}

//Returns player choice
function playerChoice() {
    let resultP = prompt("Enter rock paper or scissors");
    return resultP.toLowerCase();
    
}

//Plays a single round and returns score
function round(x,y){
       if ((x == 'rock' && y == 'scissors') ||
       (x == 'paper' && y == 'rock') ||
       (x == 'scissors' && y =='paper')) {
           console.log (`You win ${x} beats ${y}`);
           return playerScore ++;
       } else if (x == y){
           console.log (`It's a tie`)
           return;
       } else {
           console.log (`You lose ${x} loses to ${y}`);
           return computerScore ++;
       }
}

//Plays the game
function game() {
    for (let i = 1; i <= 5; i++) {
        round(playerChoice(),computerChoice());
    }
    
    console.log(`The final score is: Player: ${playerScore} Computer: ${computerScore}`);
    playerScore = 0;
    computerScore = 0;
}



