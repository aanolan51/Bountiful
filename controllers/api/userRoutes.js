const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth')

//create new user
router.post('/', async (req, res) => {
  try {
    
    const dbUserData = await User.create(req.body);
    // Set up sessions with a 'loggedIn' variable set to `true`
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.logged_in = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    // Find the user who matches the posted e-mail address
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
  

    // Verify the posted password with the password store in the database
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Create session variables based on the logged in user
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

//Angeli Test Code//
//Edit user 
router.put('/api/users/:id', withAuth, async (req, res) => {
  try {
    // console.log(req.body);
    
    const updateUser= await User.update(
      {...req.body,
        user_id: JSON.stringify(req.session.user_id)},
        {where: {name: req.params.username}}
    );
    res.status(200).json(updateUser);
  } catch (err) {
    res.status(400).json(err);
  }
}); 

/*//Edit user #2
router.put('/:id', (req, res) => {
  User.update(req.body, {
      individualHooks: true,
      where: {
          id: req.params.id,
          name: req.params.username
      }
  })
  .then(dbUserData => {
      if (!dbUserData) {
          res.status(400).json({ message: 'Cannot find this user' });
          return;
      }
      res.json(dbUserData)
  })
  .catch(err => res.status(500).json(err));
});*/


router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;