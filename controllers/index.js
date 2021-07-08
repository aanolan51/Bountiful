const router = require('express').Router();

//Bring in paths from the API routes:
const apiRoutes = require('./api');

//Bring in the homepage:
const homeRoutes = require('./homeRoutes');
//Bring in the user dashboard and ability to view items for sale:
const dashboardRoutes = require('./dashboardRoutes');

//Use the the routes and set the path:
router.use('/api', apiRoutes);

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;