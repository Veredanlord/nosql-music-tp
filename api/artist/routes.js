const Router = require('express').Router();
const controller = require('./controller');

Router.route('/generate/:number')
    .get(controller.generateArtists);

Router.route('/')
    .get(controller.getArtists);

module.exports = Router;
