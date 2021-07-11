const router = require('express').Router();
const { Item, Category, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/sellerProfile/:id', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const sellerItemData = await Item.findAll({
          //Console.log this to make sure the id matches the seller id:
        where: {id: req.params.id},
        include: [{ model: User , attributes: { exclude: ['password'] },}, {model: Category}],
      });
  
      //Getting multiple posts, so need to map the data:
      //Need to name it posts to match the partial in the handlebars:
      const items = sellerItemData.map((selleritem) => selleritem.get({ plain: true }));
  
      res.render('sellerProfile', {
        items,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
});


//Get request to pull in item model and user model to use when rendering the dashboard:
router.get('/', withAuth, async (req, res) => {
  // console.log("IN ITEM GET REQUEST");
    try {
      // Find all items associated with a logged in user:
      const userItemData = await Item.findAll({
        where: {user_id: req.session.user_id},        
        include: [{ model: User , attributes: { exclude: ['password'] },},{model: Category}],
      });

      //Find the user that is logged in:
      const userData = await User.findOne({
        where: {id: req.session.user_id}, 
        attributes: { exclude: ['password'] },
      });

      // console.log(userData);
  
      //Getting multiple items, so need to map the data:
      //Need to name it items to match the partial in the handlebars:
      const items = userItemData.map((useritem) => useritem.get({ plain: true }));
      const userInfo = userData.get({ plain: true });

      // console.log(userInfo);
      // console.log(items);

      res.render('dashboard', {
        items,
        userInfo,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });




  module.exports = router;