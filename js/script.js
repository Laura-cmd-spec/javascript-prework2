let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'rock';

printMessage('Mój ruch to: ' + computerMove);
}
else if (randomNumber == 2){
    computerMove='paper';

printMessage('Mój ruch to:' + computerMove);
}
else  {(randomNumber == 3)
    computerMove='scissors'
printMessage('Mój ruch to:' + computerMove);
}

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'rock';
printMessage('Twój ruch to: ' + playerMove);
}
else if (playerInput == '2'){
    playerMove = 'paper';
printMessage('Twój ruch to: ' + playerMove);
}
else {(playerInput == '1')
    playerMove = 'scissore';
printMessage('Twój ruch to: ' + playerMove);
}