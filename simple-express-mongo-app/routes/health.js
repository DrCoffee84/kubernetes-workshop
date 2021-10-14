var express = require('express');
var router = express.Router();
require('dotenv').config()
var validate = require('express-jsonschema').validate;
var bodyParser = require('body-parser');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://"+process.env.DB_HOST+"/taglatam";

/* GET users test. */
router.get('/', function(req, res, next) {
  var resultResponse = []; 
  MongoClient.connect(url, function(err, db) {
    if (err){
        console.log("Mongodb error: " + err);
        throw err;
      } 
    var dbo = db.db("taglatam");
    dbo.collection("users").find({}).toArray(function(err, result) {
      if (err){
        console.log("Mongo user collection error: " + err);
        throw err;
      } 
      res.send("healthy");
      db.close();
    });
  });
});


module.exports = router;
