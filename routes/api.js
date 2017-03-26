var express = require('express');
var router = express.Router();

//Routes

require('./route_Cafe')(router);
require('./route_Accueil')(router);

 //Rturn route
module.exports = router;