const Artist = require('../artist/model');
const Album = require('./model');
var mongoose = require('mongoose');
var fs = require('fs');
var jpeg = require('jpeg-js');
var mysql = require('mysql');
var jdenticon = require('jdenticon');
var nameGenerator = require('../generator/generator').generateName;
var styleGenerator = require('../generator/generator').generateStyle;
var countryGenerator = require('../generator/generator').generateCountry;

module.exports = {
  generateAlbums
}

const dir = "C:\\MAMP\\htdocs\\img\\";

function generateAlbums(req, res, next) {
  console.log(Artist.find());
  Artist.find((err, artists) => {
    for (var i = 0; i < Number(req.params.number); i++) {
      let randomNumber = Math.floor(Math.random() * Math.floor(artists.length));
      let albumName = nameGenerator(true);
      let randomPrice = Math.random() * (500 - 0) + 0
      let artist = artists[randomNumber];
      size = 200;
      value = artist.name + '-' + albumName;
      png = jdenticon.toPng(value, size);
      let imageName = artist.name + '-' + albumName + '.png';
      let newAlbum = new Album({
            title: albumName,
            artistName: artist.name,
            artistId: artist.id,
            price: randomPrice,
            image: dir + imageName,
      });
      newAlbum.save((err, data) => {
        if(err) console.log(err);
      });
    }
    return res.json(req.params.number + " added");
  });
}
