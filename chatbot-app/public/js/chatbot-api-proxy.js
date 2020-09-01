'use strict';


import * as apiClient from './api-client-fetch.js';
import {uuidv4} from './uuid.js';


if(!localStorage.getItem('chatbot-session')) {

    localStorage.setItem('chatbot-session', uuidv4() )
}

const sessionId = localStorage.getItem('chatbot-session');

const url = `http://localhost:3000/api/detect-intent/${sessionId}`;
const headers = {
    'Content-type': 'application/json; charset=utf-8',
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

    //switch(res.queryResult.action) {
    //    case 'input.ask.time':
    //        return (new Date()).toLocaleTimeString()
    //    case 'input.ask.product':
    //        switch(true){
    //            case (res.queryResult.parameters.product.indexOf(water) >= 0):
    //                return '5 bhat'
    //        }
    //        const product = res.queryResult.parameters.product
    //}

    return res.queryResult.fulfillmentText;
}