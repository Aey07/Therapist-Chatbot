# Therapist Chatbot Project

## Project Description
This project implements a simple therapist chatbot using HTML, CSS, and JavaScript. The chatbot can respond to various user inputs related to stress, music, meditation, and more. It also features loading animations and a collapsible chat window.

## Project Structure


## File Descriptions

- **index.html**: The main HTML file that contains the structure of the chatbot and the landing page.
- **style.css**: The CSS file that styles the HTML elements.
- **app.js**: JavaScript file responsible for handling the chat functionality and user interactions.
- **response.js**: JavaScript file containing the predefined responses for the chatbot.
- **chatbotservice.js**: JavaScript file providing the chatbot service logic.
- **images**: Directory containing all image assets used in the project.

## Setup and Execution Instructions

1. **Install a Local Web Server**
   - Ensure you have Node.js installed. Download and install Node.js from [nodejs.org](https://nodejs.org/).
   - Install `http-server` globally:
     ```bash
     npm install -g http-server
     ```

2. **Organize Your Project Directory**
   - Ensure your project directory matches the structure outlined above.

3. **Start the HTTP Server**
   - Navigate to your project directory in the terminal and start the HTTP server:
     ```bash
     cd /path/to/your/project-root
     http-server
     ```
   - This will start a local server. Note the address shown by `http-server`, typically `http://127.0.0.1:8080`.

4. **Access Your Project in the Browser**
   - Open your web browser and navigate to the address provided by `http-server`.

## Code Explanations

### index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Therapist Chatbot</title>
    <link rel="stylesheet" href="style.css" />
    <script src="response.js" defer></script>
    <script type="module" src="app.js" defer></script>
  </head>
  <body>
    <div class="corner-images">
      <img src="images/ailogo.png" alt="Logo 1" class="corner-image top-left" />
      <img src="images/reserchlogo.png" alt="Logo 2" class="corner-image top-right" />
    </div>
    <div class="landing-page">
      <h1>Welcome to Your Virtual Therapist</h1>
      <p>Your emotional well-being is our priority. Our virtual therapist is available 24/7 to provide you with support, understanding, and helpful advice. Start a conversation now to take the first step towards feeling better.</p>
    </div>
    <div class="container">
      <div class="chat-header"> 
        <div class="logo">
          <img src="images.png" alt="Therapist Chatbot Logo" />
        </div>
        <div class="title">How can I help you today?</div>
      </div>
      <div class="chat-body"></div>
      <div class="loading hide">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-3"></div>
      </div>
      <div class="chat-input">
        <div class="input-sec">
          <input type="text" id="txtinput" placeholder="Type here..." autofocus />
        </div>
        <div class="send">
          <img src="output-onlinepngtools.png" alt="send" />
        </div>
      </div>
    </div>
  </body>
  <script>
    document.querySelector('.chat-header').addEventListener('click', () => {
      document.querySelector('.container').classList.toggle('collapse');
    });
  </script>
</html>

### CSS
@import url('https://fonts.googleapis.com/css2?family=Bokor&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Anton', sans-serif;
    font-weight: 400;
    font-style: normal;
}

body {
    background-color: #1a1a1a;
    color: #fff;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    position: relative;
}

.corner-images {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.corner-image {
    position: absolute;
    width: 150px;
    height: auto;
}

.top-left {
    top: 10px;
    left: 10px;
}

.top-right {
    top: 10px;
    right: 10px;
}

.landing-page {
    text-align: center;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    margin-bottom: 20px;
    position: relative;
}

.landing-page h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.landing-page p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
}

.container {
    --light-color: ghostwhite;
    height: 600px;
    width: 750px;
    background-color: var(--light-color);
    box-shadow: 0px 0px 15px black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: height 0.3s ease, width 0.3s ease;
}

.container.collapse {
    height: 56px;
    width: 290px;
}

.chat-header {
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    background-color: black;
    color: var(--light-color);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-size: 1.5rem;
    cursor: pointer;
}

.chat-header .logo {
    height: 35px;
    width: 35px;
    box-shadow: 0px 0px 10px 0px black;
    margin-right: 10px;
}

.chat-header img {
    height: 100%;
}

.chat-header .title {
    flex: 1;
}

.chat-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 8px 10px;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
}

.chat-input {
    height: 60px;
    display: flex;
    align-items: center;
    border-top: 1px solid rgb(0, 0, 0);
    padding: 5px;
    background-color: #f9f9f9;
    position: relative;
}

.input-sec {
    flex: 9;
}

.send {
    flex: 1;
    padding-right: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.send img {
    width: 30px;
    height: 30px;
    cursor: pointer;
}

#txtinput {
    line-height: 30px;
    padding: 8px 10px;
    border: none;
    outline: none;
    caret-color: rgb(0, 0, 0);
    font-size: 1rem;
    width: 100%;
    background-color: ghostwhite;
    border-radius: 4px;
}

.chatbot-message,
.user-message {
    padding: 8px;
    background-color: dimgrey;
    margin: 5px;
    max-width: 70%;
    word-wrap: break-word;
    border-radius: 10px 3px 10px 10px;
    color: #000000;
}

.user-message {
    align-self: flex-start;
    opacity: 0;
    animation: fade-in-left 0.3s ease-in-out both;
}

.bot-message {
    padding: 8px;
    background-color: black;
    margin: 5px;
    max-width: 70%;
    word-wrap: break-word;
    border-radius: 10px 3px 10px 10px;
    color: ghostwhite;
    align-self: flex-end;
    opacity: 0;
    animation: fade-in-right 0.3s ease-in-out both;
}

.loading {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    bottom: 65px;
    right: 10px;
    height: 30px;
    padding-right: 300px;
}

.circle {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: black;
    margin: 5px;
    animation: scale 0.5s infinite alternate;
}

.circle-1 {
    animation-delay: 0.1s;
}

.circle-2 {
    animation-delay: 0.2s;
}

.circle-3 {
    animation-delay: 0.3s;
}

@keyframes fade-in-left {
    0% {
        transform: translate(50%);
        opacity: 0;
    }
    100% {
        transform: translate(0%);
        opacity: 1;
    }
}

@keyframes fade-in-right {
    0% {
        transform: translate(-50%);
        opacity: 0;
    }
    100% {
        transform: translate(0%);
        opacity: 1;
    }
}

@keyframes scale {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.5);
    }
}

.hide {
    display: none !important;
}

### app.js
import getResponse from './response.js';
import chatbotservice from './chatbotservice.js';

const chatBody = document.querySelector('.chat-body');
const txtInput = document.querySelector('#txtinput');
const chatInput = document.querySelector('.chat-input');
const loadingElement = document.querySelector('.loading');

document.querySelector('.send img').addEventListener('click', (e) => {
    e.preventDefault();
    const userInput = txtInput.value.trim();
    if (userInput) {
        addMessage(userInput, 'user');
        txtInput.value = '';
        showLoading();
        getChatbotResponse(userInput);
    }
});

txtInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        const userInput = txtInput.value.trim();
        if (userInput) {
            addMessage(userInput, 'user');
            txtInput.value = '';
            showLoading();
            getChatbotResponse(userInput);
        }
    }
});

function addMessage(text, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.textContent = text;
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function showLoading() {
    loadingElement.classList.remove('hide');
}

function hideLoading() {
    loadingElement.classList.add('hide');
}

async function getChatbotResponse(userInput) {
    try {
        const response = await chatbotservice.getChatbotResponse(userInput);
        addMessage(response, 'bot');
    } catch (error) {
        addMessage('Oops! Something went wrong. Please try again.', 'bot');
    } finally {
        hideLoading();
    }
}

### response.js
const responses = {
    greeting: "Hello! I'm here to help. How are you feeling today?",
    stressed: "I'm sorry to hear that. Can you tell me a bit more about what's been causing your stress?",
    overwhelmed: "Feeling overwhelmed can be tough. What do you think is the main source of your overwhelm?",
    work: "Work can definitely be a source of stress. Have you been able to take any time for yourself lately?",
    no: "It's important to take care of yourself. What are some activities you enjoy that might help you unwind? You might try activities like going to the gym, taking a walk, or listening to music.",
    music: "Music can be very soothing. What kind of music do you like to listen to?",
    classical: "That's great! Classical music can be very calming. Have you tried using music as a background while you relax or meditate?",
    jazz: "Jazz is wonderful! It can be very uplifting. Have you thought about creating a relaxing playlist?",
    rb: "R&B is great! It can be very soothing and uplifting. What are some of your favorite R&B artists?",
    meditate: "Meditation is a powerful tool for managing stress. Would you like some tips on how to start meditating?",
    yes: "Starting with just five minutes a day can make a big difference. Find a quiet spot, sit comfortably, and focus on your breath. It's okay if your mind wanders; gently bring it back to your breathing.",
    thanks: "You're welcome! Remember, I'm here whenever you need to talk.",
    gym: "Exercise like going to the gym can be a great way to relieve stress. What kind of workouts do you enjoy?",
    walking: "Walking is a wonderful way to clear your mind and reduce stress. Do you have a favorite place to walk?"
};

const getResponse = (userInput) => {
    const input = userInput.toLowerCase().trim();
    if (input.includes("hello") || input.includes("hi") || input.includes("sup") || input.includes("hey")) {
        return responses.greeting;
    } else if (input.includes("stressed") || input.includes("stress")) {
        return responses.stressed;
    } else if (input.includes("overwhelmed")) {
        return responses.overwhelmed;
    } else if (input.includes("work") || input.includes("job") || input.includes("study") || input.includes("career")) {
        return responses.work;
    } else if (input.includes("no")) {
        return responses.no;
    } else if (input.includes("music")) {
        return responses.music;
    } else if (input.includes("classical")) {
        return responses.classical;
    } else if (input.includes("jazz")) {
        return responses.jazz;
    } else if (input.includes("r&b") || input.includes("rb")) {
        return responses.rb;
    } else if (input.includes("meditate") || input.includes("meditation")) {
        return responses.meditate;
    } else if (input.includes("yes")) {
        return responses.yes;
    } else if (input.includes("thank") || input.includes("thanks")) {
        return responses.thanks;
    } else if (input.includes("gym") || input.includes("exercise")) {
        return responses.gym;
    } else if (input.includes("walk") || input.includes("walking")) {
        return responses.walking;
    } else {
        return "I'm not sure how to help with that. Can you tell me more?";
    }
};

export default getResponse;

### chatbotservice.js
import getResponse from './response.js';

const fetchresponse = (userinput) => {
    return new Promise((resolve, reject) => {
        try {
            const response = getResponse(userinput);
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};

const chatbotservice = {
    getChatbotResponse(userinput) {
        return fetchresponse(userinput);
    }
};

export default chatbotservice;


