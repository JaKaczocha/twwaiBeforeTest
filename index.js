const express = require('express');
const config = require('./config');
const { questions } = require('./questions');

const app = express();

app.listen(config.port, () => {
    console.info(`Server is running at port ${config.port}`);
});

app.get('/qa', (request,response ) => {
    response.send(questions);
});

app.get('/qa/:id',(request,response) => {
    let id = request.params.id;
    let ques = questions;
    if(id >= 0 && id < ques.length) {
        response.send(ques.at(id));
    } 
})