
//Imports ==================================================

//Node
var fs = require('fs');
//Express
var https = require('https');
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var flash    = require('connect-flash');
//MongoDB
var mongoose = require('mongoose');
//Passport
var passport = require('passport');


var credentials= {
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem'),
      passphrase: 'jeank'
};

//MongoDB

var db_uri =
  process.env.MONGODB_URI ||
  'mongodb://localhost/kofeemaker';

var defaultPort = process.env.PORT || 8080;
var securePort = 8443
var server_host = process.env.YOUR_HOST || 'localhost';

// mongoose.connect(db_uri, function (err, res) {
//   if (err) {
//     console.log ('ERROR connecting to: ' + db_uri + '. ' + err);
//   } else {
//     console.log ('Succeeded connected to: ' + db_uri);
//   }
// });

//Express configurations
var app = express();
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);


//Passport Configurations

// app.use(session({
//     secret: 'Jeank',
//     name: 'Kookie',
//     resave: true,
//     saveUninitialized: true
// }));

//  // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions
// app.use(flash()); // use connect-flash for flash messages stored in session
// require(__dirname + '/app/config/passport')(passport);
//Routes ===========================================================
//API routes
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(express.static(__dirname + '/public')); // serve static content like angular
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true })); //upload content limit
app.use(bodyParser.json());
app.use(function(req, res, next)
{ res.header('Access-Control-Allow-Origin', "*");
res.header('Access-Control-Allow-Methods','GET');
 res.header('Access-Control-Allow-Headers', 'Content-Type');
 next();
});

app.use('/api', require(__dirname+'/app/routes/api'))

//Angular routes
app.get('*', function(req, res) {
		res.sendFile(__dirname+'/public/index.html');
});

// Start the fun 
httpServer.listen(defaultPort);
httpsServer.listen(securePort);