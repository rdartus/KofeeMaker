var express = require('express');

var router = express.Router();
var mongoose = require('mongoose');
var Data = require(__dirname + '/../models/data');

module.exports = function(router){

router.get('/get/datas', function(req, res, next) {
    Data.find({}, function(err, data) {
        if (err) {
            res.send(err);
        }
        res.json(data);
    })
})


router.get('/get/data', function(req, res, next) {
    Data.findbyid({
      id : req.id
    }, function(err, data) {
        if (err) {
            res.send(err);
        }
        res.json(data);
    })
})

router.post('/add/data', function(req, res, next) {
  if (req.body) {
      var data = new Data(req.body);
      data.save(function (err,data,req){
        if (err) {
          res.send(err)
        }
        console.log(req);
        res.json(data)
      })
   }
   else {
     console.log("body undefined");
   }
})
}