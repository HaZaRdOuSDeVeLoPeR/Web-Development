const express = require("express");
const app = express();          // create an instance of express application

// configuring the application to listen to the specified port
app.listen(8080, function(){
    console.log("Server started to listen on port 8080");
});

// configuring the application to handle get requests
app.get("/", function(request, response){
    response.send("<h1>Hello From Server</h1>");
});

app.get("/contact/", function(request, response){
    response.send("<h2>Contact me at: hazardrousgamer26012003@gmail.com</h2>");
});

app.get("/about/", function(request, response){
    response.send(
        `<h2>My name is Aditya Vimal</h2>
        <h2>I live in Patna</h2>
        <h2>I am a Computer Science Student</h2>`
    );
});