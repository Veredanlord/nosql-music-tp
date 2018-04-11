const Router = require('express').Router();
const controller = require('./controller');

Router.route('/generate/:number')
    .get(controller.generateAlbums);

// Router.route('/:id')
//     .get(controller.getUser);

module.exports = Router;
