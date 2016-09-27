var unirest = require('unirest');
var express = require('express');
var router = express.Router();

router.get('/' , function(req , res){
   unirest.get("https://news-staging.api.civiceagle.com/sources")
   .header("Authorization", "Basic dGVzdGFkbWluOkdjUWwzUUhyYnI=")
   .header("Accept", "application/json")
   .end(function(result){
      var result = result.body;
   });
});

router.post('/' , function(req , res){
   unirest.get("https://news-staging.api.civiceagle.com/sources")
   .header("Authorization", "Basic dGVzdGFkbWluOkdjUWwzUUhyYnI=")
   .header("Accept", "application/json")
   .end(function(result){
      var result = result.body;
   });
});


router.put('/:id' , function(req , res){
   unirest.get("https://news-staging.api.civiceagle.com/sources/" + req.params.id)
   .header("Authorization", "Basic dGVzdGFkbWluOkdjUWwzUUhyYnI=")
   .header("Accept", "application/json")
   .end(function(result){
      var result = result.body;
   });
});
module.exports = router;
