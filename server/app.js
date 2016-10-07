"use strict";

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var unirest = require('unirest');
var debateTopic = require("./routes/debateTopics");
var issues = require("./routes/issues");
var newsSources = require("./routes/newsSource");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, './public')));

app.use('/topics', debateTopic);
app.use('/issues', issues);
app.use('/sources', newsSources);

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res){
   res.sendFile(path.join(__dirname, './public/views/index.html'));
});

// Listen //
app.listen(app.get("port"), function(){
   console.log("Listening on port: " + app.get("port"));
});
