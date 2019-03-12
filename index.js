const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    // console.log(req.body.crypto);
    request("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", function (error, response, body) {
        // console.log(body)

        var data = JSON.parse(body); // need to change this from json to js object
        var price = data.last

        res.send("<h1> The current price of bitcoin is " + price + " USD </h1>")
        console.log(price);

    });
});


app.listen(3000, function () {
    console.log('server is running on port 3000.');
});