var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var healthRouter = require('./routes/health');

var app = express();
const config = require('config');


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://"+config.get('mongodb.host')+"/taglatam";

console.log("Connecting: " + url);
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database taglatam working!");
  var dbo = db.db("taglatam");

    dbo.createCollection("users", function(err, res) {
      if (err){ 
        if( err.code === 48 ) 
          console.log("Users Exists!");
        else throw err;
      }else{
        console.log("Users created!");
      }
      db.close();
    });

});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/health', healthRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
 
  var responseData;

  if (err.name === 'JsonSchemaValidation') {
      // Log the error however you please
      console.log(err.message);
      // logs "express-jsonschema: Invalid data found"

      // Set a bad request http response status or whatever you want
      res.status(400);

      // Format the response body however you want
      responseData = {
         statusText: 'Bad Request',
         jsonSchemaValidation: true,
         validations: err.validations  // All of your validation information
      };

      // Take into account the content type if your app serves various content types
      if (req.xhr || req.get('Content-Type') === 'application/json') {
          res.json(responseData);
      } else {
          // If this is an html request then you should probably have
          // some type of Bad Request html template to respond with
          res.render('badrequestTemplate', responseData);
      }
  } else {
      // pass error to next error middleware handler
      next(err);
  }
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
