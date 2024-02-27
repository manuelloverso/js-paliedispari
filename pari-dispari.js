// Variable Declaration
const evenOrOddChoice = prompt("Scrivi 'pari' o 'dispari' ");
const userNumb = Number(prompt("Inserisci un numero da 1 a 5"));
console.log(`User : ${userNumb}`);
const computerNumb = Math.floor(Math.random() * 5 + 1);
console.log(`Computer : ${computerNumb}`);

function evenOrOdd(userChoice, userNumb, computerNumb) {
  // Sum the two numbers
  const sum = userNumb + computerNumb;

  let playerWins = false;

  // Conditions to check who wins
  if (sum % 2 == 0 && userChoice == "pari") {
    //console.log("You win");
    playerWins = true;
  } else if (sum % 2 != 0 && userChoice == "dispari") {
    //console.log("You win");
    playerWins = true;
  }

  return playerWins;
}

alert(`Il numero del computer è : ${computerNumb}`);

if (evenOrOdd(evenOrOddChoice, userNumb, computerNumb)) {
  alert("Hai Vinto");
} else {
  alert("Hai Perso");
}
