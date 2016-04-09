var express    = require('express');        // call express
var app        = express();                 // define our app using express


//All Modules API loaded here
var bear = require('./Bear/bearAPI');


//Register all API-Module Routes here
app.use('/api', bear); //This is our route middleware
app.use('/ws', bear); //This is our route middleware




module.exports = app;