// Variable Declaration
const evenOrOdd = "dispari";
const usernumb = 5;
console.log(usernumb);
const computerNumb = Math.floor(Math.random() * 5 + 1);
console.log(computerNumb);

// Sum the two numbers
const sum = usernumb + computerNumb;

if (sum % 2 == 0 && evenOrOdd == "pari") {
  console.log("You win");
} else if (sum % 2 == 0 && evenOrOdd == "dispari") {
  console.log("You lose");
} else if (sum % 2 != 0 && evenOrOdd == "pari") {
  console.log("You lose");
} else if (sum % 2 != 0 && evenOrOdd == "dispari") {
  console.log("You win");
}
