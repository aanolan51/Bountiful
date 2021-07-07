const sequelize = require('../config/connection');
const seedItem = require('./item-seeds');
const seedUser = require('./user-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedItem();
  console.log('\n----- PRODUCTS SEEDED -----\n');
  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  process.exit(0);
  
};

seedAll();
