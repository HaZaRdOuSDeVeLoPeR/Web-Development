const env = require('dotenv');
env.config();

const WeatherApp_API_Key = process.env.WeatherApp_API_KEY

const https = require('https');         // for making get request

const express = require('express');             
const app = express();

app.use(express.json());        // if a request with content-type: application/json comes, convert it from raw string to json object
app.use(express.urlencoded({extended: true}));      // express already has body-parser included

app.listen(8080, function(){
    console.log("Server Listening on Port 8080");
});

app.get('/', function(request, response){           // sending homepage
    response.sendFile(__dirname+"/index.html");
});

app.post('/weather', function(request, response){   // user sends get request with city name using POST Method
    const apikey = WeatherApp_API_Key  
    const city = request.body.city;                   // extract city name from the request
    const requrl = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apikey;

    const options = {
        method: "GET"
    }
    
    // this server is making GET request to API using https module
    const req = https.request(requrl, options, function(res){
        console.log('StatusCode:', res.statusCode);     // status Code of response for get request made to API

        let weather = "";
        // data event is fired whenever a packed is received on response object
        res.on('data', function(chunk){         // if any data is received on response, callback is triggered
            weather += chunk;                   // accumulating chunks of data
        });

        // end event is fired when the server is finished send packets
        res.on('end', function(){               
            console.log(weather);               // without parsing, the received data is a string

            const weatherData = JSON.parse(weather);    // parse the received string from API into a JSON
            console.log(weatherData);                   // parsed string into JSON Format

            const temperature = Number(weatherData.main.temp);
            const feels_like = Number(weatherData.main.feels_like);
            const desc = weatherData.weather[0].description;
            const iconurl = 'http://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '@2x.png';

            res_send = "<h1>Temperature at " + city + " is : " + (temperature-273.15).toFixed(2) + " °C</h1>";
            res_send += "<h2>Feels like : " + (feels_like-273.15).toFixed(2) + " °C</h2>";
            res_send += "<h2>Description : " + desc + "</h2>";
            res_send += "<img src=" + iconurl + " alt=icon.png>";
            response.send(res_send);
        });
    }); 
    
    req.on('error', function(err){
        console.log(err);
    });

    req.end();       // initiates the get request;
});
