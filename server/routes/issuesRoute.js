var unirest = require('unirest');
var express = require('express');
var router = express.Router();
var credentials = require('./cred');


router.get('/' , function(req , res){
   unirest.get("https://users-staging.api.civiceagle.com/issues")
   .header("Authorization", "Basic " + credentials.getCred())
   .header("Accept", "application/json")
   .end(function(result){
      res.send(result.body);
   });
});

module.exports = router;
