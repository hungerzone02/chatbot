'use strict';

import * as apiClient from './api-client-fetch.js';

const url = 'https://dialogflow.clients6.google.com/v2/projects/ajioh-qkhb/agent/sessions/96d568b4-68e4-9e84-1c98-28d0a4dcfa05:detectIntent';
const headers = {
    'Content-type': 'application/json; charset=utf-8',
    'Authorization': 'Bearer ya29.c.Ko8B2Qf6OBeiOR8wBAbApNA3GlAqC1o4zMjCmjLDk1dKeFTaCQ4C9_FzCm6loqWevChvLQeTBuJ2eosUGgQxhgQ8iZPo0O6M62XB95U4IWndpnJBFreWN40RQfP-CQNWGiCu-hejjJpj9ik2LD0v3AnCUPYRKxz1E1t0x9ig0oursW09nByMwDS2xTxDmDGvEQ4'
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
    return res.queryResult.fulfillmentText;
}