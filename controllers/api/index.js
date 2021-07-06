const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const goodsRoutes = require('./goods-routes');
// const categoryRoutes = require('./category-routes');

router.use('/users', userRoutes);
// router.use('/goods', goodsRoutes);
// router.use('/categories', categoryRoutes);

module.exports = router
