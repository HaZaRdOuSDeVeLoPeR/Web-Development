const env = require('dotenv');
env.config();

const MailChimp_API_Key = process.env.MAILCHIMP_API_KEY;
const MailChimp_ListID = process.env.MAILCHIMP_LIST_ID;

const https = require('https');

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+"/resources/"));               // declaring a directory where static files are stored

// listen on 8080 if deployed locally or assigned port by heroku if deployed on heroku
app.listen(process.env.PORT || 8080, function(){
    console.log("Server Started Listening on Port", process.env.PORT || 8080);
});

app.get('/', function(request, response){
    response.sendFile(__dirname+"/resources/signup.html");
});

app.post('/login', function(request, res){
    // console.log(request.body);
    const first_name = request.body.first;
    const last_name = request.body.last;
    const email = request.body.email;
    const password = request.body.password;
    
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: first_name,
                    LNAME: last_name
                }
            }
        ]
    };

    const postData = JSON.stringify(data);
    const url = 'https://us5.api.mailchimp.com/3.0/lists/'+MailChimp_ListID;
    const options = {
        method: "POST",
        auth: "xyz:"+MailChimp_API_Key
    }

    // using https module to create a post request
    const req = https.request(url, options, function(response){
        let reply="";
        response.on('data', function(chunk){
            reply += chunk;
        });
        response.on('end', function(){
            console.log(JSON.parse(reply));
            if(response.statusCode == 200){
                res.sendFile(__dirname+"/resources/success.html")
            }
            else res.sendFile(__dirname+"/resources/failure.html")
        })
    });

    req.write(postData);            // send stringified JSON data
    req.end();
});