const Artist = require('../artist/model');
const Album = require('../album/model');
var mongoose = require('mongoose');
var fs = require('fs');
var jpeg = require('jpeg-js');
var mysql = require('mysql');

module.exports = {
  createAlbums,
  createArtists
};

const dir = "C:\\MAMP\\htdocs\\img\\";
const pool      =    mysql.createPool({
    connectionLimit : 100, //the number of pre-load connection.
    host     : 'localhost', // host of your mySql.
    user     : 'root', // user of your mySql.
    password : 'root', // Password of your mySql.
    port : '3306', // Port of your mySql.
    database : 'music_main', // Name of yout database in mySql.
    // socketPath:  "/Applications/MAMP/tmp/mysql/mysql.sock", //if you have a socketPath.
    debug    :  false
});

function createAlbums(req, res, next) {
  var self = this;
  pool.getConnection((err,connection) => {
    console.log(self);
      if(err) {
          self.stop(err);
      } else {
        var query = "SELECT art_nom, alb_nom, alb_annee, alb_prix from artistes, albums where art_id = alb_art";
        var table = ["artists", "albums"];
        rows = self.performRequest(query, table, connection);
        rows.forEach((row) => {
          self.createAlbumFromRow(row);
        });
        return res.json(rows.length + 'added');
      }
  });
}

function createArtists(req, res, next) {
  var self = this;
  pool.getConnection((err,connection) => {
      if(err) {
          self.stop(err);
      } else {
        var query = "SELECT art_id, art_nom, gen_libelle, pay_libelle FROM artistes, genres, pays WHERE art_pays = pay_pays AND art_genre = gen_genre";
        var table = ["artists", "genre", "pays"];
        query = mysql.format(query, table);
        connection.query(query, (err,rows) => {
          if(err) {
              return res.json({"Error" : true, "Message" : "Error executing MySQL query", "Error2": err});
          } else {
              rows.forEach((row) => {
                const newArtist = new Artist({
                      name: row.art_nom,
                      nationality: row.pay_libelle,
                      style: row.gen_libelle
                });
                newArtist.save((err, data) => {
                  if(err) return err;
                });
              });
              return res.json(rows.length + ' added')
          }
        });
      }
  })
}

function createAlbumFromRow(row) {
  Artist.findOne({'name': row.art_name}, 'id name', (artist) => {
    console.log(self);
    var image = this.createRawImage();
    var imageName = artist.name + '-' + row.alb_nom;
    this.saveImage(image, imageName);
    const newAlbum = new Album({
          title: row.alb_nom,
          artistName: artist.name,
          artistId: artist.id,
          price: row.alb_prix,
          image: dir + imageName,
    });
    newAlbum.save((err, data) => {
      if(err) return err;
    });
  })
}

function performRequest(query, table, connection) {
  query = mysql.format(query, table);
  connection.query(query, (err,rows) => {
      if(err) {
          return res.json({"Error" : true, "Message" : "Error executing MySQL query"});
      } else {
          return rows
      }
  });
}

function saveImage(rawImage, imageName) {
  var jpegImageData = jpeg.encode(rawImage, 50);
  fs.writeFile(dir + imageName, jpegImageData, 'binary', function(err){
            if (err) throw err
            console.log('File saved.')
  })
}

function createRawImage() {
  var width = 320, height = 180;
  var frameData = new Buffer(width * height * 4);
  var i = 0;
  while (i < frameData.length) {
    frameData[i++] = 0xFF; // red
    frameData[i++] = 0x00; // green
    frameData[i++] = 0x00; // blue
    frameData[i++] = 0xFF; // alpha - ignored in JPEGs
  }
  var rawImageData = {
    data: frameData,
    width: width,
    height: height
  };
  return rawImageData;
}
