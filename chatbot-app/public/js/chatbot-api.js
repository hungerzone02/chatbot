'use strict';

import * as apiClient from './api-client-fetch.js';

const url = 'https://dialogflow.clients6.google.com/v2/projects/ajioh-qkhb/agent/sessions/96d568b4-68e4-9e84-1c98-28d0a4dcfa05:detectIntent';
const headers = {
    'Content-type': 'application/json; charset=utf-8',
    'Authorization': 'Bearer ya29.c.Ko8B2QcPlCX_ll4mJhh45YnQ6qh_Lzp2hF74tmFGlOLpZT1aMRbd7tsgwRCAoS_W018VWEdo1NotXMv4RJY6mc6EQt7dyotMa6lSwuko4MWRKOCAStVFn6BG678BICZgGjBEXH-R2GtQL9ZfDEmbg7SiTJhDdbzg04YgTU6zyqBPt_lIaFvfKmnipQFNyAIpgSU'
};
/**
 * Get answer from message
 * 
 * @param {string} message message to chat
 * 
 * @return {Promise<any>} answer
 */
export async function chatbot(message) {
    const payload = {
        queryInput: {
            text: {
                text:message,
                languageCode: 'ths',
            },
        },
        queryParams: {
            timezone: 'Asia/Bangkok',
        },
    };

    const res = await apiClient.post(url, payload, headers);

    switch(res.queryResult.action) {
        case 'input.ask.time':
            return (new Date()).toLocaleTimeString()
    }

    return res.queryResult.fulfillmentText;
}