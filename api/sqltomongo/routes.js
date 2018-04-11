const Router = require('express').Router();
const controller = require('./controller');
const auth = require('../../auth/auth');
var bcrypt = require('bcrypt');
var mysql   = require("mysql");
var mongoose = require('mongoose');

Router.route('/albums')
    .post(controller.albums);

Router.route('/artists')
    .get(controller.artists);

module.exports = Router;