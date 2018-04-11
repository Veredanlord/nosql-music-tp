const Artist = require('./model');
const Album = require('../album/model');
var mongoose = require('mongoose');
var fs = require('fs');
var jpeg = require('jpeg-js');
var mysql = require('mysql');
var jdenticon = require('jdenticon');
var nameGenerator = require('../generator/generator').generateName;
var styleGenerator = require('../generator/generator').generateStyle;
var countryGenerator = require('../generator/generator').generateCountry;

module.exports = {
  generateArtists,
  getArtists
}

function generateArtists(req, res, next) {
  for (var i = 0; i < Number(req.params.number); i++) {
    var newArtist = new Artist({
          name: nameGenerator(false),
          nationality: countryGenerator().name,
          style: styleGenerator()
    });
    newArtist.save((err, data) => {
      if(err) console.log(err);
    });
  }
  return res.json(req.params.number + " added");
}

function getArtists(req, res, next) {
  Artist.find({}, {name: 1, style: 1, nationality: 1}).sort('+name').exec().then((artists) => {
    return res.json(artists);
  });
}
