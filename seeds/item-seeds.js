const { Item } = require('../models');

const itemData = [
    {
    id: '1',
    title: 'extra apples',
    item_name: 'golden delicious',
    item_description: 'organic apples from my private orchard',
    item_quantity: '100',
    item_price: '20',
    user_id: '1',
    category_id: '1'
},
{
    id: '2',
    title: 'extra veggies',
    item_name: 'broccoli',
    item_description: 'locally grown broccoli',
    item_quantity: '15',
    item_price: '30',
    user_id: '2',
    category_id: '2'
},
{
    id: '3',
    title: 'extra herbs',
    item_name: 'sweet basil',
    item_description: 'organic basil leaves',
    item_quantity: '50',
    item_price: '11',
    user_id: '2',
    category_id: '3'
},
{
    id: '4',
    title: 'extra oranges',
    item_name: 'oranges',
    item_description: 'oranges from my garden',
    item_quantity: '200',
    item_price: '80',
    user_id: '4',
    category_id: '1'
},
{
    id: '5',
    title: 'farm fresh',
    item_name: 'eggs',
    item_description: 'eggs from pasture raised chickens',
    item_quantity: '24',
    item_price: '5',
    user_id: '5',
    category_id: '4'
},
{
    id: '6',
    title: 'extra peppers',
    item_name: 'peppers',
    item_description: 'green chilli peppers',
    item_quantity: '45',
    item_price: '25',
    user_id: '6',
    category_id: '2'
},

];

const seedItem = () => Item.bulkCreate(itemData);

module.exports = seedItem;