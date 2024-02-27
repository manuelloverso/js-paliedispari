// Variable Declaration
//const word = prompt("Inserisci una parola per verificare se è palindroma");
//const word = "ciao";

const word = prompt("Inserisci una parola per verificare se sia palindroma");

function palindromeCheck(word) {
  //Split the stringo into an array
  const wordSplit = word.split("");
  //console.log(wordSplit);

  //Reverse the array
  wordSplit.reverse();
  //console.log(wordSplit);

  //Rejoin the array into a string
  const reversedWord = wordSplit.join("");
  console.log(reversedWord);

  if (word == reversedWord) {
    return alert("la parola inserita è palindroma");
  } else {
    return alert("La parola inserita NON è palindroma");
  }
}

palindromeCheck(word);
