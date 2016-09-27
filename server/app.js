var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var unirest = require('unirest');
var candidateRoute = require("./routes/candidateRoute");
var debateTopicRoute = require("./routes/debateTopicRoute");
var issuesRoute = require("./routes/issuesRoute");
var newsSourcesRoute = require("./routes/newsSourcesRoute");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, './public')));

app.use('/candidateRoute' , candidateRoute);
app.use('/debateTopicRoute' , debateTopicRoute);
app.use('/issuesRoute' , issuesRoute);
app.use('/newsSourcesRoute', newsSourcesRoute);

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res){
   res.sendFile(path.join(__dirname, './public/views/index.html'));
})

// Listen //
app.listen(app.get("port"), function(){
   console.log("Listening on port: " + app.get("port"));
});
