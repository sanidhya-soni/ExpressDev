const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get('/bmicalculator', function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/', function(req, res) {
    res.send(`Sum is ${Number(req.body.num1) + Number(req.body.num2)}`);
});

app.post('/bmiCalculator', function(req, res) {
    res.send(`Your BMI is ${parseFloat(req.body.weight) / (parseFloat(req.body.height) * parseFloat(req.body.height))}`)
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});