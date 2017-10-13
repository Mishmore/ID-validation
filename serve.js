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
            "Authorization": "Bearer BQQAy3nslnuejowJaL7bvS6PB0qir1LoXyVZuURD"
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

var port = process.env.PORT || 13431;

app.listen(port, function () {
    console.log('App listening on port ' + port);
});
