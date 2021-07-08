const router = require('express').Router();
const userRoutes = require('./userRoutes');
const itemsRoutes = require('./itemRoutes');
const categoryRoutes = require('./categoryRoutes');

router.use('/users', userRoutes);
router.use('/items', itemsRoutes);
router.use('/categories', categoryRoutes);

module.exports = router
