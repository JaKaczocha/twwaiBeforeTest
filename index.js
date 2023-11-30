const express = require('express');
const config = require('./config');
const app = express();
const path = require('path');

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname,'public')));
app.listen(config.port, () => {
    console.info(`Server is running at port ${config.port}`);
});

app.get('/', (request, response) => {
    
    response.render(__dirname + '/index.html', {TITLE: "ABC"});
});


app.get('/template/:variant/:a/:b', (request,response) => {

    let a = parseFloat(request.params.a);
    let b = parseFloat(request.params.b);
    let variant = request.params.variant;
    let result = 0.0;

    if(variant === "sum") {
        result = a + b;
    } else if( variant === "sub") {
        result = a - b;
    } else if (variant === "mul") {
        result = a * b;
    } else if( variant === "div") {
        result = a / b;
    }
    response.render(__dirname + '/indexResult.html', {TITLE: "ABC", RESULT: result});
})