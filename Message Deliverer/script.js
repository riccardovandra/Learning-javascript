// Selectors

const messageIn = document.querySelector("#messageIn");
const sendBtn = document.querySelector("#sendBtn");
const lastMessage = document.querySelector("#lastMessage");

// Actual code

sendBtn.addEventListener("click", registerLastMessage);

function registerLastMessage() {
  let message = messageIn.value;
 if (message === "") {
    alert("No message inserted, please insert one");
  } else {
    lastMessage.innerHTML = message;
    messageIn.value = '';
  }
}
