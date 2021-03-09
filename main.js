var bombsArray = [];
var safesArray = [];
var maxNumber = 100;


//Creo bombe
bombsArray = createBombs(bombsArray, maxNumber);
console.log(bombsArray);

//Inizio gioco con utente
var score = game(bombsArray, safesArray, maxNumber);

//Stampo punteggio
document.getElementById('game').innerHTML = "GAME OVER!";
document.getElementById('score').innerHTML = "Il tuo punteggio è: " + score;

console.log("Il tuo punteggio è: " + score);


//FUNCTIONS
//Il computer deve generare 16 numeri casuali tra 1 e 100.
function createBombs(arrayTemp, max) {//Conto da 1 a 16
  while (arrayTemp.length < 16) {
    var number = randomNumbInRange(1, max);//Genero numero da 1 a 100 casuale con funzione

    if (!arrayTemp.includes(number)) {//Controllo se il numero è già nell'array
      arrayTemp.push(number);//Pusho il numero nell'array
    }
  }
  return arrayTemp;
}

//Chiedo (maxNumber - 16) volte di inserire un numero tra 1 e maxNumber
function game(bombsArray, safesArray, maxNumber) {
  while (safesArray.length < maxNumber - 16) {//Contare da 1 a maxNumber -16
    var utenteNumb = parseInt(prompt("Dammi un numero da 1 a 100"));//Chiedi numero a utente da 1 a 100
//Controllo che sia numero compreso da 1 e 100 e che non sia già presente
    if (!isNaN(utenteNumb) && 1 <= utenteNumb && utenteNumb <= 100 && !safesArray.includes(utenteNumb)) {
      if (!bombsArray.includes(utenteNumb)) {
        safesArray.push(utenteNumb);
      } else {
        return safesArray.length;
      }
    }
  }
  return safesArray.length;
}

//Genero numero casuale con min e max
function randomNumbInRange(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Devi inserire dei numeri");
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
