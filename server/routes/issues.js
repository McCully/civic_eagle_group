"use strict";

var unirest = require('unirest');
var express = require('express');
var router = express.Router();

router.get('/' , function(req , res){
   unirest.get("https://users-staging.api.civiceagle.com/issues")
   .header("Authorization", "Basic " + req.headers.authorization)
   .header("Accept", "application/json")
   .end(function(result){
      res.send(result.body);
   });
});

router.post('/' , function(req , res){
   unirest.post("https://users-staging.api.civiceagle.com/issues")
   .header("Authorization", "Basic " + req.headers.authorization)
   .header("Accept", "application/json")
   .send(req.body)
   .end(function(result){
      res.send(result.body);
   });
});

router.put('/:id' , function(req, res){
  console.log("Hey", req.body);
   unirest.put("https://users-staging.api.civiceagle.com/issues/" + req.params.id)
   .header("Authorization", "Basic " + req.headers.authorization)
   .header("Accept", "application/json")
   .send(req.body)
   .end(function(result){
      res.send(result.body);
   });
});

module.exports = router;
