const router = require('express').Router();

// api router will mount other routers for all our resources
router.use('/album', require('./album/routes'));
router.use('/artist', require('./artist/routes'));
router.use('/sqltomongo', require('./sqltomongo/routes'));

module.exports = router;
