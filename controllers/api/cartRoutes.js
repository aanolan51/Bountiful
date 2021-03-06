const router = require('express').Router();
const { User, Category, Item } = require('../../models');
const withAuth = require('../../utils/auth');

//Get cart
router.get('/', async (req, res) => {
    try {
    res.render('cart', {
      logged_in: req.session.logged_in 
    });
  } catch (err) {
  res.status(500).json(err);
  }
});

module.exports = router;