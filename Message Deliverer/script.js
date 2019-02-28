// Selectors

const messageIn = document.querySelector("#messageIn");
const sendBtn = document.querySelector("#sendBtn");
const lastMessage = document.querySelector("#lastMessage");

// Actual code

sendBtn.addEventListener("click", registerLastMessage);

function registerLastMessage() {
  let message = messageIn.value;
  lastMessage.innerHTML = message;
}
