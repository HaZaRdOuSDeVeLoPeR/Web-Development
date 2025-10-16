const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.listen(8080, function(){
    console.log("Started Listening on Port 8080");
})

app.get('/', function(request, response){
    response.sendFile(__dirname+"/index.html");
});

app.post('/calculated', function(request, response){
    let weight = Number(request.body.weight);
    let height = Number(request.body.height);
    let bmi = (weight)/(height*height);
    bmi = bmi.toFixed(3);

    let res = "Calculated BMI : "+bmi+" kg/m<sup>2</sup>";
    response.send(res);
});