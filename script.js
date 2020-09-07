//store the selections in an array for ease
let selections = ['rock', 'paper', 'scissors']
    

//function computer random selection no input
function computerSelectRandomInt() {
 // math random to pick integer 0-2 that translates to rock-paper-scissors
return    Math.floor(Math.random() * 3);  
}   

function convertToString(int){
   return selections[int];
}
// function to take user input cleaned and computer input and return the winner





function playRound(e) {
    console.log(e.target.id)
//convert to strings
const computerSelection =  convertToString(computerSelectRandomInt()) ;
const playerSelection =  convertToString(e.target.id);
console.log(playerSelection)
//compare the results
if (playerSelection == computerSelection) {
    console.log("tie")
resultsInfo.innerText = "TIE"
}
else if (playerSelection == 'rock' && computerSelection == 'scissors'
|| playerSelection == 'paper' && computerSelection == 'rock'
|| playerSelection == 'scissors' && computerSelection == 'paper'


) {
    playerScore ++;
    playerScoreDiv.innerHTML = `Player Score: ${playerScore}` ;
    resultsInfo.innerText =  `You win! ${playerSelection} beats ${computerSelection}!`;
}


else if (playerSelection == 'rock' && computerSelection == 'paper'
|| playerSelection == 'paper' && computerSelection == 'scissors'
|| playerSelection == 'scissors' && computerSelection == 'rock'

) {
    computerScore ++;
    computerScoreDiv.innerHTML = `Computer Score: ${computerScore}` ;
    resultsInfo.innerText =  `You lose! ${playerSelection} loses to ${computerSelection}`;
}

//end function

}

let computerScore = 0;
let playerScore = 0;





const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound))


const playerScoreDiv = document.querySelector('#playerScoreDiv')
playerScoreDiv.innerText = `Player Score: ${playerScore}`

const computerScoreDiv = document.querySelector('#computerScoreDiv')
computerScoreDiv.innerText = `Computer Score: ${computerScore}`


const resultsInfo = document.querySelector('#resultsInfo')