var express = require("express");
var bodyParser  = require("body-parser");
var app  = express();
var morgan = require('morgan');
var mongoose = require('mongoose');
var api =  require('./api');

function REST(app){
    var self = this;
    self.connectMongo();
}

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With,     Content-Type");
    next();
});

app.use('/api', api);

REST.prototype.connectMongo = function() {
    mongoose
        .connect('mongodb://localhost:27017/nosql_tp', (err) => {
        if(err) {
          console.log(err);
        }
        this.startServer();
      });
};

REST.prototype.startServer = function() {
    app.listen(3000,function(){
        console.log("All right my friend, sky is the limit ! enjoy !");
    });
};

REST.prototype.stop = function(err) {
    console.log("ISSUE WITH MYSQL n" + err);
    process.exit(1);
};

new REST(app);
module.exports = app;
