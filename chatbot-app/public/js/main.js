'use strict';

import {getUserInputMessage, addMessage} from './chat.js';
import {chatbot} from './chatbot-api-proxy.js';

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener('click', async(ev) => {
        if(ev.target.classList.contains('chat-cmd-send')) {
            const message = getUserInputMessage(true);
            addMessage('me', message);
            const answer = await chatbot(message);
            addMessage('friends', answer);
        }
    });
});
