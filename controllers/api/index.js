const router = require('express').Router();
const userRoutes = require('./userRoutes');
const itemsRoutes = require('./itemRoutes');
const categoryRoutes = require('./categoryRoutes');
const cartRoutes = require('./cartRoutes');
const editprofileRoutes = require('./editprofileRoute');

router.use('/users', userRoutes);
router.use('/items', itemsRoutes);
router.use('/categories', categoryRoutes);
router.use('/cart', cartRoutes);
router.use('/editprofile', editprofileRoutes );

module.exports = router
