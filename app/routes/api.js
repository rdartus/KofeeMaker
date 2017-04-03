var express = require('express');
var router = express.Router();

//Routes
require(__dirname +'/route_Cafe')(router);

 //Rturn route
module.exports = router;