var unirest = require('unirest');
var express = require('express');
var router = express.Router();
var credentials = require('./cred');


router.post('/cred', function(req, res){
  var cred = req.body;
  credentials.setCred(cred);
  res.sendStatus(200);
});

router.get('/' , function(req , res){
   unirest.get("https://reps-staging.api.civiceagle.com/candidates")
   .header("Authorization", "Basic " + credentials.getCred())
   .header("Accept", "application/json")
   .end(function(result){
      res.send(result.body);
      // console.log("RESULT HERE: " , res.body);
   });
});

router.post('/' , function(req ,res){
   unirest.get("https://reps-staging.api.civiceagle.com/candidates")
   .header("Authorization", "Basic " + credentials.getCred())
   .header("Accept", "application/json")
   .end(function(res){
      res.send(result.body);
   });
});

router.put('/:id' , function(req , res){
   unirest.get("https://reps-staging.api.civiceagle.com/candidates/" + req.params.id)
   .header("Authorization", "Basic " + credentials.getCred())
   .header("Accept", "application/json")
   .end(function(result){
      var result = result.body;
      console.log(result);
   });
});

router.get('/:id' , function(req , res){
   unirest.get("https://reps-staging.api.civiceagle.com/candidates/" + req.params.id)
   .header("Authorization", "Basic " + credentials.getCred())
   .header("Accept", "application/json")
   .end(function(result){
      var result = result.body;
      console.log(result);
   });
});


module.exports = router;
