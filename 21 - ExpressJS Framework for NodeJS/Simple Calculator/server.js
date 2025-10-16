const fsModule = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.listen(8080, function(){
    console.log("Started listening to requests on port 8080");
});

app.get('/', function (request, response){
    // can also use response.sendFile() method here instead of filestream
    const data = fsModule.readFileSync(__dirname+"/calculator.html", 'utf-8');
    response.send(data);
});

app.post('/calculated', function(request, response){
    let num1 = Number(request.body.num1);
    let num2 = Number(request.body.num2);

    response.send("Calculated :"+ (num1+num2));
});