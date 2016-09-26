var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var unirest = require('unirest');


unirest.get("https://reps-staging.api.civiceagle.com/candidates")
.header("Authorization", "Basic dGVzdGFkbWluOkdjUWwzUUhyYnI=")
.header("Accept", "application/json")
.end(function(res){
   var result = res.body;
   console.log(result);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, './public')));

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res){
   res.sendFile(path.join(__dirname, './public/views/index.html'));
})

// Listen //
app.listen(app.get("port"), function(){
   console.log("Listening on port: " + app.get("port"));
});
