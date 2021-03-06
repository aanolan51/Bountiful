// Pull in all requirements
const router = require('express').Router();
const { Item, User, Category } = require('../../models');
const withAuth = require('../../utils/auth');

// Find all items and display content:
  //Use path /api/items:
  router.get('/', async (req, res) => {
    try {
      const itemData = await Item.findAll({
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
  
      const items = itemData.map((item) => item.get({ plain: true }));
  
      res.render('browse', {
        items,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

//Find all items in a chosen category:
router.get('/view/:category_id', withAuth, async (req, res) => {
  // console.log("INSIDE CATEGORY FILTER BE FUNCTION")
  try {
    // console.log(req.params);
    const catItemData = await Item.findAll({
      where: {category_id: req.params.category_id},
      include: [{ model: User, attributes: {exclude: ['password']},}, {model: Category}],
    });

    
    const items = catItemData.map((catItem) => catItem.get({ plain: true }));
    // console.log(items);

    res.render('browse', {
      items,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// // Find the one item by id in order to display content:
//   //Use path /api/items/view/:id:
//   router.get('/view/:id', async (req, res) => {
//     try {
//       const itemData = await Item.findByPk(req.params.id, {
//         include: [
//           {
//             model: User,
//             attributes: {exclude: ['password']},
//           },
//           {
//             model: Category,
//           },
//         ],
//       });
  
//       const item = itemData.get({ plain: true });
  
//       res.render('itemview', {
//         ...item,
//         logged_in: req.session.logged_in
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });


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
        }); 

      // console.log(createdItem);

      res.status(200).json(createdItem);
    } catch (err) {
      res.status(400).json(err);
    }
});

//Update an item at the path /api/items/edititem/:id:
router.put('/edititem/:itemID', withAuth, async (req, res) => {
    // update an item by its `id` value
    try {
      // console.log(req.body);
      // console.log(req.params);
      // console.log(req.session.user_id);
      const updateItem= await Item.update(
        {...req.body,
          //Need to stringify the user id in order to take it as an argument in the create:
          user_id: JSON.stringify(req.session.user_id)},
          {where: {id: req.params.itemID}}
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