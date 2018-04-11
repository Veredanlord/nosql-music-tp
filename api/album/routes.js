const Router = require('express').Router();
const controller = require('./controller');

Router.route('/generate/:number')
    .get(controller.generateAlbums);

Router.route('/')
    .get(controller.getAlbums);

Router.route('/catalogue/:sort')
    .get(controller.getFullList);

Router.route('/count')
    .get(controller.count);


module.exports = Router;
