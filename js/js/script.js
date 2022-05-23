function playGame(playerInput) {
clearMessages();

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber)

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

/*let playerMove = getMoveName(playerInput)*/

/*if(playerInput =='1'){
  playerMove ='rock';
}else if (playerInput == '2'){
    playerMove ='paper';
}else {(playerInput == '3')
    playerMove ='scissore';
}*/
printMessage('Your moved: ' + playerMove);

console.log('Wylosowana liczba to: ' + randomNumber);

// zwracanie wyniku gry

console.log('moves:', argComputerMove, argPlayerMove);

function displayResult(argcomputerMove, argplayerMove){
    printMessage('I played ' + argcomputerMove + ', and You ' + argplayerMove);
if( argcomputerMove == 'rock' && argplayerMove == 'paper'){
    printMessage('You Won!');
} else if( argcomputerMove == 'rock' && argplayerMove == 'scissors'){
    printMessage('You lost!');
} else if( argcomputerMove == 'paper' && argplayerMove == 'rock'){
    printMessage('You lost!');
} else if ( argcomputerMove == 'paper' && argplayerMove == 'scissors'){
    printMessage('You Won!');
} else if( argcomputerMove == 'scissors' && argplayerMove == 'rock'){
    printMessage('You won!');
} else if ( argcomputerMove == 'scissors' && argplayerMove == 'paper'){
    printMessage('You lost!');
} else if (argcomputerMove == argplayerMove){
    printMessage('Draw!');
} else {( argplayerMove == 'nieznany ruch')
    printMessage('Error!');
}}

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
document.getElementById('restart').addEventListener('click', function () {
    restartGame();
});

document.getElementById('next-round').addEventListener('click', function () {
    nextRound();
});

}