const User = require('./User');
const Item = require('./Item');
const Category = require('./Category');


//Create all the associations between the user, the items, and the categories:
User.hasMany(Item, {
  foreignKey: 'user_id',
});
Category.hasMany(Item, {
  foreignKey: 'category_id',
});


Item.belongsTo(User, {
  foreignKey: 'user_id',
});
Item.belongsTo(Category, {
  foreignKey: 'category_id',
});


module.exports = { User, Item, Category };
