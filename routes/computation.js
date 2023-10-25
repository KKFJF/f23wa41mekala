
var express = require('express');

var router = express.Router();

 

 

/* GET users listing. */

router.get('/', function(req, res, next) {

    x=0

  if(req.query.x === undefined){

    x = Math.random(7);

  }else{

    x = req.query.x;

  }

 

  imul = Math.imul(x);

  log = Math.log(x);

  log10 = Math.log10(x);

  res.send("imul applied to " + x + " is " + imul+" log applied to" + x + " is " + log + "log10 applied to "+ x + " is "+ log10);

});

 

module.exports = router;
