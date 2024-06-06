import getResponse from './chatbotservice.js';

const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtinput");
const sendButton = document.querySelector(".send");
const loadingEle = document.querySelector(".loading");

const renderMessage = (text, className) => {
    const messageEle = document.createElement("div");
    messageEle.classList.add(className);
    messageEle.innerText = text;
    chatBody.appendChild(messageEle);
    chatBody.scrollTop = chatBody.scrollHeight;
};

const handleUserInput = () => {
    const userInput = txtInput.value.trim();
    if (userInput) {
        renderMessage(userInput, "user-message");
        txtInput.value = "";
        toggleLoading(true);
        setTimeout(() => {
            const response = getResponse(userInput);
            renderMessage(response, "bot-message");
            toggleLoading(false);
        }, 1000);
    }
};

const toggleLoading = (show) => {
    loadingEle.classList.toggle("hide", !show);
};

sendButton.addEventListener("click", handleUserInput);
txtInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        handleUserInput();
    }
});
