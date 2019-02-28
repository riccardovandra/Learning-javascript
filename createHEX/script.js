// Creating an array with the various numbers

const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// DOM Selection

const hexBtn = document.querySelector(".hexBtn");
const body = document.querySelector("body");
const hex = document.querySelector(".hex");

hexBtn.addEventListener("click", getHex);

function getHex() {
  let hexCol = "#";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hexNumbers.length);
    hexCol += hexNumbers[random];
  }
  hex.innerHTML = hexCol;
  body.style.backgroundColor = hexCol;
}
