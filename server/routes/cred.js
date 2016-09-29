"use strict";

var unirest = require('unirest');
var express = require('express');
var router = express.Router();
var credentials;

router.post('/', function (req, res) {
  credentials = req.body.cred;
  res.sendStatus(200);
});

function getCred(){
return credentials;
}

function setCred(cred){
  credentials = cred;
}

module.exports = {
  router: router,
  getCred: getCred,
  setCred: setCred,
};
