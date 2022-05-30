const myArray = ['rock', 'paper', 'scissors'];

let playerSelection = getPlayerSelection().toLowerCase();
let computerSelection = getComputerSelection().toLowerCase();

let playerScore = 0;
let computerScore = 0;

game();
announceWinner(playerScore, computerScore);
console.log(playerScore);
console.log(computerScore);

//playerSelection Function
function getPlayerSelection(){
  let playerSelection = prompt('Rock, Paper, Scissors?');
  return playerSelection;
}

//computerSelection Function
function getComputerSelection(){
  let computerSelection = myArray[Math.floor(Math.random() * myArray.length)];
  return computerSelection;
}

//playRound Function
function playRound(playerSelection,  computerSelection){
  if (playerSelection == computerSelection) {
    return 'draw'
  } else if (playerSelection == 'rock' && computerSelection == 'scissors'){
    playerScore += 1;
    return 'win'
  }else if (playerSelection == 'paper' && computerSelection == 'rock'){
    playerScore += 1;
    return 'win'
  }else if (playerSelection == 'scissors' && computerSelection == 'paper'){
    playerScore += 1;
    return 'win'
  }else if (playerSelection == 'rock' && computerSelection == 'paper'){
    computerScore += 1;
    return 'lose'
  }else if (playerSelection == 'paper' && computerSelection == 'scissors'){
    computerScore += 1;
    return 'lose'
  }else if (playerSelection == 'scissors' && computerSelection == 'rock'){
    computerScore += 1;
    return 'lose'
  }
  }
  

//game Function that plays 5 rounds and adds wins onto each player
function game(){
  for (g=0; g < 5; g++) {
    let playerSelection = getPlayerSelection().toLowerCase();
    let computerSelection = getComputerSelection().toLowerCase();
    console.log(playRound(playerSelection, computerSelection));
  }
}

//function that announces a winner by checking scores.
function announceWinner(playerScore, computerScore){
  if (playerScore > computerScore){
    console.log('Congratulations, You Win!')
  } else if (playerScore < computerScore){
    console.log('Sorry, You Lost This Time!')
  }
}

