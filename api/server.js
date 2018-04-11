var express = require("express");
var bodyParser  = require("body-parser");
var app  = express();
var morgan = require('morgan');
var mysql   = require("mysql");
var mongoose = require('mongoose');
var api =  require('./aSi');

function REST(){
    var self = this;
    self.connectMongo();
    self.connectMysql();
    self.startServer();
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
        .connect('mongodb://172.17.0.2:27017/nosql_tp', function() {
        console.log('Connected Mongo Database URL: 172.17.0.2');
        });
};

REST.prototype.connectMysql = function() {
    var self = this;
    var pool      =    mysql.createPool({
        connectionLimit : 100, //the number of pre-load connection.
        host     : '172.17.0.3', // host of your mySql.
        user     : 'root', // user of your mySql.
        password : 'root', // Password of your mySql.
        port : '3306', // Port of your mySql.
        database : 'music_main', // Name of yout database in mySql.
        // socketPath:  "/Applications/MAMP/tmp/mysql/mysql.sock", //if you have a socketPath.
        debug    :  false
    });
    pool.getConnection(function(err,connection){
        if(err) {
            self.stop(err);
        } else {
            //self.configureExpress(connection);
            console.log('mysql ok');
        }
    });
};

/*REST.prototype.configureExpress = function() {
    var self = this;
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(morgan('tiny'))
    var router = express.Router();
    app.use('/api', router);
    var rest_router = new rest(router);
    self.startServer();
};*/

REST.prototype.startServer = function() {
    app.listen(3000,function(){
        console.log("All right my friend, sky is the limit ! enjoy !");
    });
};

REST.prototype.stop = function(err) {
    console.log("ISSUE WITH MYSQL n" + err);
    process.exit(1);
};

module.exports = app;

new REST();
