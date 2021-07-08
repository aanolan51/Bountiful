const { User } = require('../models');

const userData = [
    {
        id: "1",
        first_name: "Sal",
        last_name: "Vador",
        username: "summerSal",
        location: "West Sac",
        email: "sal@hotmail.com",
        password: "password12345"
      },
      {
        id:  "2",
        first_name: "Lernantino",
        last_name: "Williams",
        username: "happyFarmer",
        location: "North Sac",
        email: "lernantino@gmail.com",
        password: "password12345"
      },
      {
        id: "3",
        first_name: "Amiko",
        last_name: "Moritz",
        username: "amiRight",
        location: "North Sac",
        email: "amiko2k20@aol.com",
        password: "password12345"
      },
      {
        id: "4",
        first_name: "Jordan",
        last_name: "Lee",
        username: "jLee",
        location: "East Sac",
        email: "jordan99@msn.com",
        password: "password12345"
      },
      {
        id: "5",
        first_name: "Blake",
        last_name: "Smith",
        username: "humanBean",
        location: "East Sac",
        email: "the_blake@yahoo.com",
        password: "password12345"
      }


];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;