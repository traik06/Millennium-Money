
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const exEjsLay = require('express-ejs-layouts');
//const bodyParser = require('body-parser')
require("./passportconfig")(passport)



app.use(express.static(__dirname + '/assets'))
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
//app.set('layout', 'layout')
app.use (exEjsLay)

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extened: false}))
app.use(flash())




app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}))

//passport initialization
app.use(passport.initialize())
app.use(passport.session())






//app.use(bodyParser.urlencoded({ limit: '1mb', extended: false}))
// routers
app.use('/', require('./routes/index'));
app.use('/', require('./routes/user'));
app.use('/', require('./routes/account'));
app.use('/', require('./routes/expense'));
app.use('/', require('./routes/admin'));
app.use('/', require('./routes/feedback'));
app.use('/', require('./routes/prevExpense'));

// connect mongoose to db
var mongoPassword = 'hello123';
			
var http = require('http');
var server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  var config = JSON.parse(process.env.APP_CONFIG);
  var MongoClient = require('mongodb').MongoClient;

  MongoClient.connect(
    "mongodb://" + config.mongo.user + ":" + encodeURIComponent(mongoPassword) + "@" + 
    config.mongo.hostString, 
    
  );
});
server.listen(process.env.PORT);
