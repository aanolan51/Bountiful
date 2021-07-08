const { Category } = require('../models');

const categoryData = [
    {
      category_name: 'fruits',
    },
    {
      category_name: 'vegetables',
    },
    {
      category_name: 'herbs',
    },
    {
        category_name: 'dairy',
    },
    {
        category_name: 'flowers',
    }
  ];
  
  const seedCategories = () => Category.bulkCreate(categoryData);
  
  module.exports = seedCategories;