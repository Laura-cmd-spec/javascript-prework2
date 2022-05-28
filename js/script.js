
{const playGame=function(playerInput) {
  clearMessages();

const getMoveName=function(argMoveId){

  if(argMoveId == 1){
      return 'rock';
    }
    else if (argMoveId == 2){
      return 'paper';
    }
    else { (argMoveId == 3)
      return 'scissors';
    }}
  

const displayResult=function (argComputerMove, argPlayerMove){
   
  if( argComputerMove == 'rock' && argPlayerMove == 'paper'){
    printMessage('You Won!');
  }
   else if( argComputerMove == 'rock' && argPlayerMove == 'scissors'){
    printMessage('You lost!');
  }
   else if( argComputerMove == 'paper' && argPlayerMove == 'rock'){
    printMessage('You lost!');
  }
   else if ( argComputerMove == 'paper' && argPlayerMove == 'scissors'){
    printMessage('You Won!');
  } 
  else if( argComputerMove == 'scissors' && argPlayerMove == 'rock'){
    printMessage('You won!');
  }
  else if ( argComputerMove == 'scissors' && argPlayerMove == 'paper'){
    printMessage('You lost!');
  }
  else { (argComputerMove == argPlayerMove)
    printMessage('Draw!');
  }
}

const randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

const argComputerMove = getMoveName(randomNumber);
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

const argPlayerMove = getMoveName(playerInput);
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
