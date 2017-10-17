const express = require('express');
var request = require('request');
var cors = require('cors');
var app = express();

app.use(cors());

app.get('/', function (req, res) { 
    res.writeHead(500); res.write('Try /dni?v=xxxxxxxx'); res.end(); 
});

app.get('/dni', function (req, res) {

    let options = {
        "method": 'POST',
        "url": 'https://tecactus.com/api/reniec/dni',
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "Bearer lY1GflO69hv9NLuo7uzc4Jq6ZsVTfekDvP06pMlj"
        },
        "json": true,
        "body": {
            "dni": req.query.v
        }
    };
    
    request(options, function (error, response, body) {
        console.log(error || body);
        res.end(JSON.stringify(body));
    });
    
});

//API
var api = require("./api");

app.get('/api/users', function (req, res) {
    let user = api.readOnce();
    user.then( (result) => {
        res.status(200).json(result);
    });
});

app.get('/api/new-user', function (req, res) {
    let newUser = api.writeUserData(req.query.userid, req.query.username, req.query.email);
    res.end();
})

var port = process.env.PORT || 13431;

app.listen(port, function () {
    console.log('App listening on port ' + port);
});

