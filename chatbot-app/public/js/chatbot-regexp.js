'use strict';

const chatbotName = 'จาวิช'

/**
 * 
 * @param {string} message message tp chatbot
 * @return {Promise<any>} answer
 */
export async function chatbot(message) 
{
    switch(true) {
        case (/ชื่อ(อะ)?ไร/imu).test(message):
            return `ผมชื่อ ${chatbotName}`;
        case (/(กี่โมง)|(เวลา.*เท่าไร)/imu).test(message):
            return (new Date()).toLocaleTimeString();
            default:
                return `ผมไม่เข้าใจ`
    }
}