
var fs = require('fs');
var https = require('https');
var http = require('http');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var credentials= {
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem'),
      passphrase: 'jeank'
    };
//MongoDB
var db_uri =
  process.env.MONGODB_URI ||
  'mongodb://localhost/jetkins';

var theport = process.env.PORT || 8080;
var securePort = 8443
var server_host = process.env.YOUR_HOST || 'localhost';

mongoose.connect(db_uri, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + db_uri + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + db_uri);
  }
});

var app = express();

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

//Express

app.use(bodyParser.urlencoded({limit: '100mb'}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next)
{ res.header('Access-Control-Allow-Origin', "*");
res.header('Access-Control-Allow-Methods','GET');
 res.header('Access-Control-Allow-Headers', 'Content-Type');
 next();
});

//Routes
app.use('/api', require('./routes/api'))



httpServer.listen(theport);
httpsServer.listen(securePort);