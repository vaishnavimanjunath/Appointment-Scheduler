var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');
var app = express();
// mongoose.connect(config_urls.url.mongoDB, function(err, db) {
//     if (!err) {
//         console.log("Connected to Database");
//     } else {
//         console.log("failed to connect");
//     }
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    next();
});

app.post('/userAuthentication', function (req, res) {
    console.log('user authentication hits..');
    console.log(req.body);
    res.json({result:'successfully logged in'});
})

app.listen(8085,function(){
    console.log('listening to the port 8085');
});
