function getMoveName()
let randomNumber = Math.floor(Math.random() * 3 + 1);

/*console.log('Wylosowana liczba to: ' + randomNumber);*/

let computerMove = getMoveName(randomNumber);

function getMoveName(MoveId){
    if(MoveId == 1){
      return 'kamień';
    }else if(MoveId == 2){
      return 'papier';
    }else if(MoveId == 3){
      return 'nożyce';
    }else {
      printMessage('Nie znam ruchu o id ' + MoveId + '.');
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

let playerMove = getMoveName(playerInput)

/*let playerMove ='nieznany ruch';
if(playerInput =='1'){
  playerMove ='rock';
}else if (playerInput == '2'){
    playerMove ='paper';
}else {(playerInput == '3')
    playerMove ='scissore';
}
printMessage('Your move: ' + playerMove);*/
console.log('Wylosowana liczba to: ' + randomNumber);


function displayResult(ComputerMove, PlayerMove){
    printMessage('Zagrałem ' + ComputerMove + ', a Ty ' + PlayerMove);
}

if(playerMove =='Nieznany ruch') {
    printMessage('Error');
}
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
}else {('computerMove == playerMove')
    printMessage('Draw!');
}
