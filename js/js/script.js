function playGame(playerInput) {
  clearMessages();

function getMoveName(MoveId){

  if(MoveId == 1){
    return 'rock';
    } else if(MoveId == 2){
    return 'paper';
    } else if(MoveId == 3){
    return 'scissors';
    } else {
    printMessage ('I do not know the moved id ' + MoveId + '.');
    return 'nieznany ruch';
    }
}
function displayResult(argComputerMove, argPlayerMove){
    printMessage('I played ' + argComputerMove + ', and You ' + argPlayerMove);
  if( argComputerMove == 'rock' && argPlayerMove == 'paper'){
    printMessage('You Won!');
  } else if( argComputerMove == 'rock' && argPlayerMove == 'scissors'){
    printMessage('You lost!');
  } else if( argComputerMove == 'paper' && argPlayerMove == 'rock'){
    printMessage('You lost!');
  } else if ( argComputerMove == 'paper' && argPlayerMove == 'scissors'){
    printMessage('You Won!');
  } else if( argComputerMove == 'scissors' && argPlayerMove == 'rock'){
    printMessage('You won!');
  } else if ( argComputerMove == 'scissors' && argPlayerMove == 'paper'){
    printMessage('You lost!');
  } else if (argComputerMove == argPlayerMove){
    printMessage('Draw!');
  } else {( argPlayerMove == 'nieznany ruch')
    printMessage('Error!');
}}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber)

/*if(randomNumber =='1'){
  computerMove ='rock';
}else if (randomNumber =='2'){
    computerMove ='paper';
}else {(randomNumber =='3')
    computerMove ='scissors';
} */

printMessage('My moved: ' + computerMove);

/*let playerInput = prompt('Choose your move! 1: rock, 2: paper, 3: scissors.');*/ 

console.log('Gracz wpisał:' + playerInput);

let playerMove = getMoveName(playerInput)

/*if(playerInput =='1'){
  playerMove ='rock';
}else if (playerInput == '2'){
    playerMove ='paper';
}else {(playerInput == '3')
    playerMove ='scissore';
}*/
printMessage('Your moved: ' + playerMove);

displayResult(computerMove, playerMove);

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1)
});
document.getElementById('play-paper').addEventListener('click', function (){
    playGame(2)
});
document.getElementById('play-scissors').addEventListener('click', function (){
    playGame(3)
});
document.getElementById('restart').addEventListener('click', function (){
    restartGame();
});

document.getElementById('next-round').addEventListener('click', function (){
    nextRound();
});

}
