const User = require('./User');
const Item = require('./Item');


//Create all the associations between the user, the posts, and the comments:
User.hasMany(Item, {
  foreignKey: 'userid',
});


Item.belongsTo(User, {
  foreignKey: 'userid',
});





module.exports = { User, Item };