const router = require('express').Router();

// api router will mount other routers for all our resources
router.use('/album', require('./albums/routes'));
router.use('/artist', require('./artist/routes'));

module.exports = router;