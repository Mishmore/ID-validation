const express = require('express');
const bodyParser = require('body-parser');
var request = require('request');
var cors = require('cors');
// const reniec = require('./api/reniec');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended": true }));

// let router = express.Router();
// app.use('/api', reniec(router));
app.get(/^(?!\/proxy\/).+$/, function (req, res) {
    res.end('Hello');
});

app.post('/proxy/:region/:type?', function (req, res) {

    let token = 'BQQAy3nslnuejowJaL7bvS6PB0qir1LoXyVZuURD';
    request.post({
        url: getEndpoint(req.params, req.query),
        body: JSON.stringify(req.body)
    }).pipe(res);

});

app.listen(process.env.PORT || 3000, function () {
    console.log('App listening on port 3000!');
});
