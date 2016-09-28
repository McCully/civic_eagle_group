"use strict";

var unirest = require('unirest');
var express = require('express');
var router = express.Router();
var credentials = require('./cred');


router.get('/' , function(req , res){
    unirest.get("https://debate-staging.api.civiceagle.com/topics")
    .header("Authorization", "Basic " + credentials.getCred())
   .header("Accept", "application/json")
   .end(function(result){
      res.send(result.body);
   });
});

router.post('/' , function(req , res){
   unirest.get("https://debate-staging.api.civiceagle.com/topics")
   .header("Authorization", "Basic " + credentials.getCred())
   .header("Accept", "application/json")
   .end(function(result){
      res.send(result.body);
   });
});

router.put('/:id' , function(req, res){
   unirest.get("https://debate-staging.api.civiceagle.com/topics/" + req.params.id)
   .header("Authorization", "Basic " + credentials.getCred())
   .header("Accept", "application/json")
   .end(function(result){
      res.send(result.body);

   });
});

module.exports = router;
