const messageInput = document.querySelector(".message-input");
const chatBody = document.querySelector(".chat-body");

// Create message element with dynamic classes
const createMessageElement = (content, classes) => {
    const div = document.createElement("div");
    div.classList.add("message", classes);
    div.innerHTML = content;
    return div;
}

// Handles Outoging User messages
const handleOutgoingMessage = (userMessage) => {
    const messageContent = `<div class="message-text">${userMessage}</div>`;
    createMessageElement(messageContent, "user-message");
    const outgoingMessageDiv = createMessageElement(messageContent, "user-message");
    chatBody.appendChild(outgoingMessageDiv);
}

// Handles message sending when pressing enter key
messageInput.addEventListener("keydown", (e) => {
    const userMessage = e.target.value.trim();
    if(e.key === "Enter" && userMessage) {
        handleOutgoingMessage(userMessage);
    }
});