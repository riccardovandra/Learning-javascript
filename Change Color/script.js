// Select elements

const colorBtn = document.querySelector(".colorBtn");
const body = document.querySelector("body");

const colors = ["yellow", "red", "green", "#3b5998"];

colorBtn.addEventListener("click", changeColor);

function changeColor() {
  let random = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[random];
}
