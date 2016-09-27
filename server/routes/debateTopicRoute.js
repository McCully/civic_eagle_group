var unirest = require('unirest');
var express = require('express');
var router = express.Router();

router.get('/' , function(req , res){
   unirest.get("https://debate-staging.api.civiceagle.com/topics")
   .header("Authorization", "Basic dGVzdGFkbWluOkdjUWwzUUhyYnI=")
   .header("Accept", "application/json")
   .end(function(result){
      var result = result.body;
   });
});

router.post('/' , function(req , res){
   unirest.get("https://debate-staging.api.civiceagle.com/topics")
   .header("Authorization", "Basic dGVzdGFkbWluOkdjUWwzUUhyYnI=")
   .header("Accept", "application/json")
   .end(function(result){
      var result = result.body;
   });
});

router.put('/:id' , function(req, res){
   unirest.get("https://debate-staging.api.civiceagle.com/topics/" + req.params.id)
   .header("Authorization", "Basic dGVzdGFkbWluOkdjUWwzUUhyYnI=")
   .header("Accept", "application/json")
   .end(function(result){
      var result = result.body;

   });
});

module.exports = router;
