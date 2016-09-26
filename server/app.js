var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var unirest = require('unirest');
var candidates = require("./routes/candidateRoute");
var debateTopics = require("./routes/debateTopicRoute");
var issues = require("./routes/issuesRoute");
var newsTopics = require("./routes/newsTopicRoute");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, './public')));

app.use('/candidateRoute' , candidates);
app.use('/debateTopicRoute' , debateTopics);
app.use('/issuesRoute' , issues);
app.use('/newsTopicRoute', newsTopics);

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res){
   res.sendFile(path.join(__dirname, './public/views/index.html'));
})

// Listen //
app.listen(app.get("port"), function(){
   console.log("Listening on port: " + app.get("port"));
});
