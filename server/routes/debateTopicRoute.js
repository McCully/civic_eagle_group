var unirest = require('unirest');
var express = require('express');
var router = express.Router();

router.get('/' , function(req , res){
   unirest.get("https://debate-staging.api.civiceagle.com/topics")
   .header("Authorization", "Basic dGVzdGFkbWluOkdjUWwzUUhyYnI=")
   .header("Accept", "application/json")
   .end(function(res){
      var result = res.body;
      console.log(result);
   });
});

router.post('/' , function(req , res){
   unirest.get("https://debate-staging.api.civiceagle.com/topics")
   .header("Authorization", "Basic dGVzdGFkbWluOkdjUWwzUUhyYnI=")
   .header("Accept", "application/json")
   .end(function(res){
      var result = res.body;
      console.log(result);
   });
});

router.put('/' , function(req , res){
   unirest.get("https://debate-staging.api.civiceagle.com/topics/?????")
   .header("Authorization", "Basic dGVzdGFkbWluOkdjUWwzUUhyYnI=")
   .header("Accept", "application/json")
   .end(function(res){
      var result = res.body;
      console.log(result);
   });
});

module.exports = router;
