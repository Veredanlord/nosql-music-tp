const Artist = require('../artist/model');
const Album = require('../album/model');
var mongoose = require('mongoose');
var fs = require('fs');
var jpeg = require('jpeg-js');
var mysql = require('mysql');
var jdenticon = require("jdenticon");

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
      if(err) {
          self.stop(err);
      } else {
        var query = "SELECT art_nom, alb_nom, alb_annee, alb_prix, alb_annee from artistes, albums where art_id = alb_art";
        var table = ["artists", "albums"];
        query = mysql.format(query, table);
        connection.query(query, (err,rows) => {
            if(err) {
                return res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                rows.forEach((row) => {
                  Artist.findOne({ 'name': row.art_nom}, 'id name', (err, artist) => {
                    size = 200;
                    value = artist.name + '-' + row.alb_nom;
                    png = jdenticon.toPng(value, size);
                    var imageName = artist.name + '-' + row.alb_nom + '.png';
                    fs.writeFileSync(dir + imageName, png);
                    let newAlbum = new Album({
                          title: row.alb_nom,
                          artistName: artist.name,
                          artistId: artist.id,
                          price: row.alb_prix,
                          image: dir + imageName,
                          release: row.alb_annee
                    });
                    newAlbum.save((err, data) => {
                      if(err) return err;
                    });
                  });
                });
                return res.json(rows.length + 'added');
            }
        });
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
                let newArtist = new Artist({
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
