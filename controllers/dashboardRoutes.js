const router = require('express').Router();
const { Item, Catergory, User } = require('../models');
const withAuth = require('../utils/auth');

//Add in withAuth to include the authorization for logins. Only go to dashboard page when logged in. Show all items for the user:
router.get('/', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userItemData = await Item.findAll({
        where: {user_id: req.session.user_id},
        attributes: { exclude: ['password'] },
        include: [{ model: User }, {model: Catergory}],
      });
  
      //Getting multiple posts, so need to map the data:
      //Need to name it posts to match the partial in the handlebars:
      const items = userItemData.map((useritem) => useritem.get({ plain: true }));
  
      res.render('dashboard', {
        items,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });



  module.exports = router;