"use strict";

var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, './public')));

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res){
   res.sendFile(path.join(__dirname, './public/views/index.html'));
});

app.listen(app.get("port"), function(){
   console.log("Listening on port: " + app.get("port"));
});
