'use strict';

export function addMessage(type, message) {
    const containerElem = document.createElement('div');
    containerElem.classList.add('chat-message-container');

    const messageElem = document.createElement('div');
    messageElem.classList.add('chat-message', `cl-${type}`);
    messageElem.textContent = message;
 
    containerElem.append(messageElem);

    document.querySelector('#chat-display').append(containerElem);
}

export function getUserInputMessage(isClear) {
    const userInputElem = document.querySelector('#chat-user-input');
    const value = userInputElem.value;
    if(isClear) userInputElem.value = '';
    return value;
}