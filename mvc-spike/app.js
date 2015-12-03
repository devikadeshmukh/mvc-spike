var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/cart/add', function (req, res) {
    cart.items.push(plans[req.body.planId - 1]);
    res.send("200");
});

app.get('/cart', function (req, res) {
    res.send(cart);
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
    {id: 1, name: "Plan1", product: products[0]},
    {id: 2, name: "Plan2", product: products[1]},
    {id: 3, name: "Plan3", product: products[2]}
];

var cart = {
    items: []
};
module.exports = app;