//Declare global variables
let playerScore;
let computerScore;

//Get references to html elementss
const pScoreUI = document.querySelector('#playerScoreT');
const cScoreUI = document.querySelector('#computerScoreT');

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const clearButton = document.querySelector('.clear');

const gameLog = document.querySelector('.history');

gameLog.setAttribute('style', 'white-space: pre;');

//Initialize scores
if (playerScore == undefined && computerScore == undefined) {
    playerScore = 0;
    computerScore = 0;
    updateScoreText();
}

//Array of commands computer can use
const commands = [
    "rock",
    "paper",
    "scissors"
];

//Add button functionality
rockButton.addEventListener("click", () => round(playerChoice("rock"),computerChoice()));
paperButton.addEventListener("click", () => round(playerChoice("paper"),computerChoice()));
scissorsButton.addEventListener("click", () => round(playerChoice("scissors"),computerChoice()));
clearButton.addEventListener("click", () => (gameLog.textContent = ""));

//Returns computer choice
function computerChoice() {
    let randomNum = Math.floor(Math.random() * commands.length);
    let resultC = commands[randomNum];
    return resultC;
}

//Returns player choice
function playerChoice(str) {
    let resultp = '';
    return resultp + str;
}

//Updates score text in html
function updateScoreText(){
    pScoreUI.textContent = (`Your score: ${playerScore}`);
    cScoreUI.textContent = (`Computer score: ${computerScore}`);


}

//Plays a single round and returns score
function round(x,y){
       if ((x == 'rock' && y == 'scissors') ||
       (x == 'paper' && y == 'rock') ||
       (x == 'scissors' && y =='paper')) {
            gameLog.textContent += (`--> You win ${x} beats ${y}\r\n`);
            playerScore++
            winCondition(playerScore,computerScore);
            updateScoreText();
            return;
       } else if (x == y){
            gameLog.textContent += (`--> It's a tie\r\n`)
            return playerScore && computerScore;
       } else {
            gameLog.textContent += (`--> You lose ${x} loses to ${y}\r\n`);
            computerScore ++; 
            winCondition(playerScore,computerScore);
            updateScoreText();
            return;
       }
}

//See if anyone has won and reset game
function winCondition() {
    if (playerScore >= 5 || computerScore >= 5){
        gameLog.textContent += ("\r\n");
        gameLog.textContent += (`The final score is: Player: ${playerScore} Computer: ${computerScore}\r\n`);
        
        if (playerScore > computerScore) {
            //gameLog.style.color = "green";
            gameLog.textContent += ("You win!\r\n");
            gameLog.textContent += ("\r\n");
            //gameLog.style.color = "white";
        }
        else {
            //gameLog.style.color = "red";
            gameLog.textContent += ("You lose!\r\n");
            gameLog.textContent += ("\r\n");
            //gameLog.style.color = "white";
        }

        playerScore = 0;
        computerScore = 0;

        updateScoreText();
        return;
    } 
    else {
        return;
    }
}
