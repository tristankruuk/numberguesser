const guesser = document.getElementById("guess");
const insertion = document.getElementById("insertion");

let GuessedNumber = 0;
let Number = Math.floor(Math.random() * 1000) + 1;
console.log(Number);

guesser.addEventListener("keydown", Guess);

function Guess(e) {
  if (e.key === "Enter") {
    const value = e.target.value;

    if (value > 1000) {
      alert("Number is too big");
      e.target.value = "";
    } else {
      GuessedNumber = value;

      if (value == Number) {
        const success = document.createElement("div");
        success.textContent = `You guessed the number! It was ${Number}`;
      } 
      
      else if (value > Number) {
        const guess = document.createElement("div");
        guess.textContent = value;
        guess.className = "insertion";

        const hint = document.createElement("div");
        hint.className = "wrong-hint-container"
        const triangle = document.createElement("div");
        triangle.className = "lower-hint-triangle"

        insertion.appendChild(guess);
        guess.appendChild(hint)
        hint.appendChild(triangle)
        e.target.value = "";
      } 
      
      else {
        const guess = document.createElement("div");
        guess.textContent = value;
        guess.className = "insertion";

        const hint = document.createElement("div");
        hint.className = "wrong-hint-container"
        const triangle = document.createElement("div");
        triangle.className = "higher-hint-triangle"

        insertion.appendChild(guess);
        guess.appendChild(hint)
        hint.appendChild(triangle)
        e.target.value = "";
      }
    }
  }
}
