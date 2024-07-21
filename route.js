const express = require('express');
const app = express();
app.use(express.static('AURO TECH-1'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/landing.html");
});

app.get('/about', function(req, res) {
    res.sendFile(__dirname + "/about.html");
});

app.get('/contact', function(req, res) {
    res.sendFile(__dirname + "/contact.html");
});

app.get('/services', function(req, res) {
    res.sendFile(__dirname + "/service.html"); 
});

app.listen(2024);
