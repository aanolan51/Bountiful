const router = require('express').Router();
const { User, Category, Item } = require('../../models');
const withAuth = require('../../utils/auth');

//Get cart
router.get('/', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {id: req.session.user_id}, 
            attributes: { exclude: ['password'] },
          });
        const userInfo = userData.get({ plain: true });
    res.render('cart', { 
        userInfo, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
  res.status(500).json(err);
  }
});




module.exports = router;