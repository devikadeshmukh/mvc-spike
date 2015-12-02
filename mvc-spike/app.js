var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/plan', function (req, res) {
    res.send(plans[0]);
});

app.get('/plans', function (req, res) {
    res.send(plans);
});

app.get('/products', function (req, res) {
    res.send(products);
});

var products = [
    {name: "data1", value: "10"},
    {name: "data2", value: "20"},
    {name: "data3", value: "30"},
    {name: "data4", value: "40"},
    {name: "data5", value: "50"}
];

var plans = [
    {name: "Plan1", product: products[0]},
    {name: "Plan2", product: products[1]},
    {name: "Plan3", product: products[2]}
];

module.exports = app;