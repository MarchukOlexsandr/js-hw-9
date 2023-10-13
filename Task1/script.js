const messagesContainer = document.getElementById("messages");
const newMessageForm = document.querySelector("form");
const yourNameInput = document.getElementById("your-name");
const yourMessageInput = document.getElementById("your-message");
const sendButton = document.getElementById("send-button");

newMessageForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = yourNameInput.value;
  const message = yourMessageInput.value;
  const newMessage = document.createElement("div");
  newMessage.classList.add("message");
  newMessage.innerHTML = `<div class="message-header"><div class="message-name">${name}</div><div>${new Date().toLocaleString()}</div></div><div>${message}</div>`;
  messagesContainer.appendChild(newMessage);

  yourNameInput.value = "";
  yourMessageInput.value = "";
});
