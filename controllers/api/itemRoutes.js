// Pull in all requirements
const router = require('express').Router();
const { Item, User, Category } = require('../../models');
const withAuth = require('../../utils/auth');

//Include an edit button for one post. When button clicked, bring to edit page. Find the one post by id in order to display content in the form:
  //Use path /api/items/edititem/:id:
  router.get('/edititem/:id', async (req, res) => {
    try {
      const itemData = await Item.findByPk(req.params.id, {
        include: [
          {
            model: User,
          },
          {
            model: Category,
          },
        ],
      });
  
      const item = itemData.get({ plain: true });
  
      res.render('editItem', {
        item,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


  //Get request to make a new item and render new item page:
router.get('/createitem', (req, res) => {
    if (req.session.logged_in) {
      //if already logged in, go to the new post for the user:
      res.render('newItem', {logged_in: req.session.logged_in});
    }
});

// Create a new item at path /api/items/createItem:
router.post('/createItem', withAuth, async (req, res) => {
  // console.log("IN POST FUNCTION")
  // console.log(req.body);
  // console.log(req.session.user_id);
    try {
      // console.log("INSIDE TRY FUNCTION")
  
      const createdItem = await Item.create({
        ...req.body,
        //Need to stringify the user id in order to take it as an argument in the create:
        user_id: JSON.stringify(req.session.user_id),
        category_id: req.body.category_id}); 

      console.log(createdItem);

      res.status(200).json(createdItem);
    } catch (err) {
      res.status(400).json(err);
    }
});

//Update an item at the path /api/items/edititem/:id:
router.put('/edititem/:id', withAuth, async (req, res) => {
    // update an item by its `id` value
    try {
      const updateItem= await Item.update(
        {title: req.body.title,
        item_name: req.body.item_name,
        item_quantity: req.body.item_quantity,
        item_price: req.body.item_price
        },
        {where: {id: req.params.id, user_id: req.session.user_id,}}
      );
      res.status(200).json(updateItem);
    } catch (err) {
      res.status(400).json(err);
    }
});

//Delete an item at path api/items/:id:
router.delete('/:id', withAuth, async (req, res) => {
    try {
      const itemData = await Item.destroy({
          //destory the specific item id where the user is the current logged in user:
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!itemData) {
        res.status(404).json({ message: 'No Post Found' });
        return;
      }
  
      res.status(200).json(itemData);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;