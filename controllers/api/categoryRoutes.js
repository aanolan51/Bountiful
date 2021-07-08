const router = require('express').Router();
const { Category, Item } = require('../../models');

//Get all categories
router.get('/', (req, res) => {
  Category.findAll({
      attributes: ['id', 'category_name'],
      include: {
          model: Item,
          attributes: ['id', 
          'title',
          'item_name',
          'item_description',
          'item_quantity',
          'item_price',
          'user_id',
          'category_id', 
          'price']
      }
  })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Get one category by id
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
        model: Item,
        attributes: ['id', 
        'title',
        'item_name',
        'item_description',
        'item_quantity',
        'item_price',
        'user_id',
        'category_id', 
        'price']
    }
  })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Create a new category
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
    .then(dbCategoryData => {
      res.json({ message: `${dbCategoryData.category_name} has been added.` })//messages optional
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

//Updating a category by id
router.put('/:id', (req, res) => {
  Category.update({
    category_name: req.body.category_name
  },
  {
    where: {
      id: req.params.id
    }
  })
    .then(dbCategoryData => {
      res.json({ message: `${dbCategoryData} has been updated.` })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Delete a category
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCategoryData => {
      res.json({ message: `${dbCategoryData} has been deleted.` })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;