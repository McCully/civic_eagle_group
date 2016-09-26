var unirest = require('unirest');
var express = require('express');
var router = express.Router();

router.get('/' , function(req , res){
   unirest.get("https://users-staging.api.civiceagle.com/issues")
   .header("Authorization", "Basic dGVzdGFkbWluOkdjUWwzUUhyYnI=")
   .header("Accept", "application/json")
   .end(function(res){
      var result = res.body;
      console.log(result);
   });
});

module.exports = router;
