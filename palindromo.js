// Variable Declaration
//const word = prompt("Inserisci una parola per verificare se è palindroma");
//const word = "ciao";

let word = "ciao";

//Split the stringo into an array
let wordSplit = word.split("");
console.log(wordSplit);

//Reverse the array
wordSplit.reverse();
console.log(wordSplit);

//Rejoin the array into a string
const reversedWord = wordSplit.join("");
console.log(reversedWord);

//palindromeCheck();
