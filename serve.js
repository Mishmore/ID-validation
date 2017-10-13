const express = require('express');
const bodyParser = require('body-parser');
const reniec = require('./api/reniec');

const app = express();
let router = express.Router();

app.use(bodyParser.json());

router.get('/', (req, res) => {
  res.json({ name: 'dni-validation' });
});

app.use('/api', reniec(router));

app.get('/', function (req, res) {
    res.send('Hello World!');
  });

app.listen(process.env.PORT || 3000, function () {
    console.log('App listening on port 3000!');
});
