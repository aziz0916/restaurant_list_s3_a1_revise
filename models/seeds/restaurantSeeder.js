const bcrypt = require('bcryptjs')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const db = require('../../config/mongoose')
const User = require('../user')
const Restaurant = require('../restaurant')
const restaurant = require('../restaurant')
const restaurantList = require('../../restaurant.json').results

const SEED_USERS = [{
  email: 'user1@example.com',
  password: '12345678',
  restaurants: restaurantList.slice(0, 3)
},
{
  email: 'user2@example.com',
  password: '12345678',
  restaurants: restaurantList.slice(3, 6)
}]

db.once('open', () => {
  Promise.all(Array.from(SEED_USERS, seedUser => {
    bcrypt
      .genSalt(10)
      .then(salt => bcrypt.hash(seedUser.password, salt))
      .then(hash => User.create({
        name: seedUser.name,
        email: seedUser.email,
        password: hash,
      }))
      .then(user => {
        const userId = user._id
        seedUser.restaurants.map(restaurant => {
          restaurant.userId = userId
        })
        return Restaurant.create(seedUser.restaurants)
      })
      .then(() => {
        console.log('done')
        process.exit()
      })
  }))
})

