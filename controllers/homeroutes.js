const router = require('express').Router();
const { Post, Comment, User } = require('../models');

//Get request to check if logged in, and if not render the signup page:
router.get('/signup', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      //if already logged in, go to the dashboard for the user:
      res.redirect('/dashboard');
      return;
    }
  
    res.render('signup');
  });
  
  
  
    module.exports = router;