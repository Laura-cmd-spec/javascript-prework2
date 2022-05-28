
{function playGame(playerInput) {
  clearMessages();

function getMoveName(argMoveId){

  if(argMoveId == 1){
      return 'rock';
    }
    if(argMoveId == 2){
      return 'paper';
    }
    if(argMoveId == 3){
      return 'scissors';
    }
  }

function displayResult(argComputerMove, argPlayerMove){
   
  if( argComputerMove == 'rock' && argPlayerMove == 'paper'){
    printMessage('You Won!');
  }
   if( argComputerMove == 'rock' && argPlayerMove == 'scissors'){
    printMessage('You lost!');
  }
   if( argComputerMove == 'paper' && argPlayerMove == 'rock'){
    printMessage('You lost!');
  }
   if ( argComputerMove == 'paper' && argPlayerMove == 'scissors'){
    printMessage('You Won!');
  } 
  if( argComputerMove == 'scissors' && argPlayerMove == 'rock'){
    printMessage('You won!');
  }
  if ( argComputerMove == 'scissors' && argPlayerMove == 'paper'){
    printMessage('You lost!');
  }
   if (argComputerMove == argPlayerMove){
    printMessage('Draw!');
  }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);
printMessage('My moved: ' + argComputerMove);

/*if(randomNumber =='1'){
  computerMove ='rock';
}else if (randomNumber =='2'){
    computerMove ='paper';
}else {(randomNumber =='3')
    computerMove ='scissors';
} */



/*let playerInput = prompt('Choose your move! 1: rock, 2: paper, 3: scissors.');*/ 

console.log('Gracz wpisał:' + playerInput);

let argPlayerMove = getMoveName(playerInput);
printMessage('Your moved: ' + argPlayerMove);
displayResult(argComputerMove, argPlayerMove);


/*if(playerInput =='1'){
  playerMove ='rock';
}else if (playerInput == '2'){
    playerMove ='paper';
}else {(playerInput == '3')
    playerMove ='scissore';
}*/
}
document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
document.getElementById('play-paper').addEventListener('click', function (){
    playGame(2);
  });
document.getElementById('play-scissors').addEventListener('click', function (){
    playGame(3);
  });
}
