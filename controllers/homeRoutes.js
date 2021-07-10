const router = require('express').Router();
const { User, Category, Item } = require('../models');
const withAuth = require('../utils/auth');

//Render initial homepage that does not requir user login:
router.get('/', (req, res) => {
  try {
    res.render('homepage', { 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
  res.status(500).json(err);
  }
});

// Find the one item by id in order to display content:
  //Use path /view/:id:
  router.get('/view/:id', async (req, res) => {
    try {
      const itemData = await Item.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: {exclude: ['password']},
          },
          {
            model: Category,
          },
        ],
      });
  
      const item = itemData.get({ plain: true });
  
      res.render('itemview', {
        ...item,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

//Get user to the login route:
router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

module.exports = router;