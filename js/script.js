function playGame(playerInput){
    clearMessages()
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber)

function getMoveName(MoveId){
    if(MoveId == 1){
      return 'rock';
    }else if(MoveId == 2){
      return 'paper';
    }else if(MoveId == 3){
      return 'scissors';
    }else {
      printMessage('I do not know the moved o id ' + MoveId + '.');
      return 'nieznany ruch';
    }
  }

/*let computerMove = 'nieznany ruch';
if(randomNumber =='1'){
  computerMove ='rock';
}else if (randomNumber =='2'){
    computerMove ='paper';
}else {(randomNumber =='3')
    computerMove ='scissors';
} 

printMessage('My move: ' + computerMove);

let playerInput = prompt('Choose your move! 1: rock, 2: paper, 3: scissors.'); */

console.log('Gracz wpisał:' + playerInput);

/*let playerMove = getMoveName(playerInput)*/

/*let playerMove ='nieznany ruch';
if(playerInput =='1'){
  playerMove ='rock';
}else if (playerInput == '2'){
    playerMove ='paper';
}else {(playerInput == '3')
    playerMove ='scissore';
}
printMessage('Your move: ' + playerMove);*/

/*console.log('Wylosowana liczba to: ' + randomNumber);*/

function displayResult(computerMove, playerMove){
    printMessage('I played ' + computerMove + ', and You ' + playerMove)
if( computerMove == 'rock' && playerMove == 'paper'){
    printMessage('You Won!');
}else if( computerMove == 'paper' && playerMove == 'scissors'){
    printMessage('You Won!');
}else if( computerMove == 'scissors' && playerMove == 'rock'){
    printMessage('You won!');
}else if( computerMove == 'rock' && playerMove == 'scissors'){
    printMessage('You Won!');
}else if( computerMove == 'paper' && playerMove == 'rock'){
    printMessage('You lost!');
}else if( computerMove == 'paper' && playerMove == 'rock'){
    printMessage('You lost!');
}else if( computerMove == 'scissors' && playerMove == 'paper'){
    printMessage('You lost!');
}else {('computerMove == playerMove');
    printMessage('Draw!');
}
}

displayResult(computerMove, playerMove);

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1)
});
document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2)
});
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3)
});
document.getElementById('restart').addEventListener('click', function () {
    restartGame();
});

document.getElementById('next-round').addEventListener('click', function () {
    nextRound();
});

}