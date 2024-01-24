let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

const chatContainerEl = document.getElementById("chatContainer");
const userInputEl = document.getElementById("userInput");
const sendMsgBtnEl = document.getElementById("sendMsgBtn");

function getReplayFromBot() {
    let noOfChatbotMsg = chatbotMsgList.length;
    let chatMsg = chatbotMsgList[Math.ceil(Math.random() * noOfChatbotMsg) - 1];

    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-from-chatbot-container");
    chatContainerEl.appendChild(msgContainerEl);

    let chatbotMsgEl = document.createElement("span");
    chatbotMsgEl.textContent = chatMsg;
    chatbotMsgEl.classList.add("msg-from-chatbot");
    msgContainerEl.appendChild(chatbotMsgEl);
}

sendMsgBtnEl.onclick = function() {
    let userMsg = userInputEl.value;

    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-to-chatbot-container");
    chatContainerEl.appendChild(msgContainerEl);

    let userMsgEl = document.createElement("span");
    userMsgEl.textContent = userMsg;
    userMsgEl.classList.add("msg-to-chatbot");
    msgContainerEl.appendChild(userMsgEl);

    userInputEl.value = " ";
    getReplayFromBot();
}