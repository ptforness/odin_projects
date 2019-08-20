var express = require('express');
var routes = require('./routes.js');
var app = express();

app.use('/', routes);

//Logger
app.use(function(req, res, next) {
    console.log("Request IP: " + req.ip);
    console.log("Request Method: " + req.method);
    console.log("Request Date: " + new Date() + "\n");
    next();
});

// 404
app.use(function(req, res, next) {
    res.status(404).sendFile('C:/Users/ptfornes/test-node/wiki_proj/404.html');
});

app.listen(3000);