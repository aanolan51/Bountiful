const router = require('express').Router();
const { User, Category, Item } = require('../../models');
const withAuth = require('../../utils/auth');

//Edit user 
router.put('/:id', withAuth, async (req, res) => {
    console.log("INSIDE EDIT PROFILE ROUTE!!")
    try {
    //   console.log(req.body);
      
      const updateUser= await User.update(
        {...req.body},
        {where: {id: req.params.id}}
      );
      res.status(200).json(updateUser);
    } catch (err) {
      res.status(400).json(err);
    }
  }); 

  module.exports = router;