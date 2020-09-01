'use strict';

import express from 'express';
import cors from 'cors';
import bodyPaser from 'body-parser';
import dialogflow from '@google-cloud/dialogflow';

const projectId = 'ajioh-qkhb';
const port = 3000;
const sessionClient = new dialogflow.SessionsClient();
const app = express();

app.use(cors());
app.use(bodyPaser.json({extended: true}));

app.get('/', (req,res) => {
    res.send('Hello World!!!');
});

app.post('/api/detect-intent/:sessionId', async (req,res) => {
    const sessionPath = sessionClient.projectAgentSessionPath(projectId, req.params.sessionId);
    const request = {
        session: sessionPath,
        ...req.body,
    };

    const responses = await sessionClient.detectIntent(request);
    res.send(responses[0]);
});

app.listen(port, () => {
    console.log(`asd at http://localhost:${port}`);
});