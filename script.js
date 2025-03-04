const messageInput = document.querySelector(".message-input");
const chatBody = document.querySelector(".chat-body");
const sendMessageButton = document.querySelector("#send-message");

const userData = {
    message: null
}

// Create message element with dynamic classes
const createMessageElement = (content, classes) => {
    const div = document.createElement("div");
    div.classList.add("message", classes);
    div.innerHTML = content;
    return div;
}

// Handles Outoging User messages
const handleOutgoingMessage = (e) => {
    e.preventDefault();
    userData.message = messageInput.value.trim();
    messageInput.value = "";

    // Create and Display user message
    const messageContent = `<div class="message-text"></div>`;

    createMessageElement(messageContent, "user-message");
    const outgoingMessageDiv = querySelector(".message-text").innerText = userData.message;
    chatBody.appendChild(outgoingMessageDiv);
}

// Handles message sending when pressing enter key
messageInput.addEventListener("keydown", (e) => {
    const userMessage = e.target.value.trim();
    if(e.key === "Enter" && userMessage) {
        handleOutgoingMessage(e);
    }
});

sendMessageButton.addEventListener("click", (e) => handleOutgoingMessage(e)) 