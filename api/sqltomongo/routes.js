const Router = require('express').Router();
const controller = require('./controller');
var bcrypt = require('bcrypt');
var mysql   = require("mysql");
var mongoose = require('mongoose');

Router.route('/albums')
    .get(controller.createAlbums);

Router.route('/artists')
    .get(controller.createArtists);

module.exports = Router;
