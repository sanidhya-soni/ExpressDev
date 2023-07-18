const express = require('express');
const app = express();

const port = 3000;

app.get('/', function(req, res) {
    res.send("<h1>Hello Ji</h1>");
});

app.get('/contact', function(req, res) {
    res.send("Contact me at: sanidhya0601@gmail.com");
});

app.get('/about', function(req, res) {
    res.send("LazyLoader");
});

app.listen(port, function() {
    console.log(`Server started at Port: ${port}`);
});