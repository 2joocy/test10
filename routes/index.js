var express = require('express');
var router = express.Router();
const { return85 } = require('../handlers/85')

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.param("bingo")){
    res.render('index', { title: '85sut', circusCalc: return85(req.param("bingo"))});
  }else{
    res.render('index', { title: '85sut', circusCalc: "No number given"});
  }
});

router.post('/', function(req, res, next) {
  console.log("Bingo:" + req.body.bingo);
  if(req.body.bingo){
    res.render('index', { title: '85sut', circusCalc: return85(req.body.bingo)});
  }else{
    res.render('index', { title: '85sut', circusCalc: "No number given"});
  }
});

module.exports = router;
