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

//GET all items for homepage
// router.get('/', async (req, res) => {
//   try {
//     const dbItemData = await Item.findAll({
//       include: [
//         {
//           model: Item,
//           attributes: [
//             'id', 
//             'title', 
//             'item_name', 
//             'item_description',
//             'item_quantity',
//             'item_unit',
//             'item_price',
//             'user_id',
//             'category_id'
//           ],
//         },
//       ],
//     });

//     const items = dbItemData.map((item) =>
//       item.get({ plain: true })
//     );

//     res.render('homepage', {
//       items,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

//GET one item
// router.get('/:id', async (req, res) => {
//   try {
//     const dbItemData = await Item.findByPk(req.params.id, {
//       include: [
//         { model: Item,
//           attributes: [
//             'id', 
//             'title', 
//             'item_name', 
//             'item_description',
//             'item_quantity',
//             'item_unit',
//             'item_price',
//             'user_id',
//             'category_id'
//           ],
//         },
//       ],
//     });
//       if (!dbItemData) {
//         res.status(400).json({ message: "Error: no items exist with this id"});
//         return;
//       }
//       res.status(200).json(dbItemData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//     });
  

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