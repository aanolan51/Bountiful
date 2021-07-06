const router = require('express').Router();

//Bring in paths from the API routes:
const apiRoutes = require('./api');

//Bring in the homepage:
const homeRoutes = require('./homeRoutes');

//Use the the routes and set the path:
router.use('/api', apiRoutes);

router.use('/', homeRoutes);
// router.use('/dashboard', dashboard);

module.exports = router;