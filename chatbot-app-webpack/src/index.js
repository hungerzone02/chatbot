'use strict';

import {fromEvent} from 'rxjs';
import {first,filter} from 'rxjs/operators';

import {getUserInputMessage, addMessage} from './chat/chat.js';
import {chatbot} from './chatbot-api-proxy.js';

fromEvent(document, 'DOMcontentLoded')
.pipe(
    first(),
)
.subscribe(() => {
    fromEvent(document, 'click')
    .pipe(
        filter((ev) => ev.target.classList.contains('chat-cmd-send')),
    )
    .subscribe(() => {
        const message = getUserInputMessage(true);
        addMessage('me', message);
        const answer = await chatbot(message);
        addMessage('friends', answer)
    })
});
