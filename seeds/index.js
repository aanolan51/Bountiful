const seedUser = require('./user-seeds');
const seedItem = require('./item-seeds');
const seedCategories = require('./category-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');
  await seedItem();
  console.log('\n----- PRODUCTS SEEDED -----\n');
 

  process.exit(0);
  
};

seedAll();
