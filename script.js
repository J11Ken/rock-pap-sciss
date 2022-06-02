const myArray = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;
let draws = 0;

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', e =>{
    playRound(e.target.textContent.toLowerCase(), getComputerSelection());
    scoreUpdate();
    scoreAnnouncer(playerScore, computerScore);
  }
  );
});


let play = document.getElementById("player");
let com = document.getElementById("cpu");
let drw = document.getElementById("draws");
let announcement = document.createElement('p');

play.textContent = `Player Score : ${playerScore}`;
com.textContent = `Computer Score : ${computerScore}`;
drw.textContent = `Draws : ${draws}`;

announcement.textContent = 'And the winner is:';
document.body.appendChild(announcement);


//Function that updates the score after each game
function scoreUpdate(){
    play.textContent = `Player Score : ${playerScore}`;
    cpu.textContent = `Computer Score : ${computerScore}`;
    drw.textContent = `Draws : ${draws}`;
}


//Function that accounces winner when someone reaches 5 points
function scoreAnnouncer(playerScore, computerScore){
  if (playerScore == 5){
    announcement.textContent = 'And the winner is: You! Well done!'
  } else if (computerScore == 5){
    announcement.textContent = 'And the winner is: Computer! Unlucky!'
  } };


//computerSelection Function
function getComputerSelection(){
  let computerSelection = myArray[Math.floor(Math.random() * myArray.length)];
  return computerSelection;
};


//playRound function 
function playRound(playerSelection,  computerSelection){
  if (playerSelection == computerSelection) {
    draws += 1;
  } else if (playerSelection == 'rock' && computerSelection == 'scissors'){
    playerScore += 1;
  }else if (playerSelection == 'paper' && computerSelection == 'rock'){
    playerScore += 1;
  }else if (playerSelection == 'scissors' && computerSelection == 'paper'){
    playerScore += 1;
  }else if (playerSelection == 'rock' && computerSelection == 'paper'){
    computerScore += 1;
  }else if (playerSelection == 'paper' && computerSelection == 'scissors'){
    computerScore += 1;
  }else if (playerSelection == 'scissors' && computerSelection == 'rock'){
    computerScore += 1;
  };
  };

