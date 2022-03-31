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
// Promise.all方法
// db.once('open', () => {
//   Promise.all(Array.from(SEED_USERS, seedUser => {
//     bcrypt
//       .genSalt(10)
//       .then(salt => bcrypt.hash(seedUser.password, salt))
//       .then(hash => User.create({
//         name: seedUser.name,
//         email: seedUser.email,
//         password: hash,
//       }))
//       .then(user => {
//         const userId = user._id
//         seedUser.restaurants.map(restaurant => {
//           restaurant.userId = userId
//         })
//         return Restaurant.create(seedUser.restaurants)
//       })
//       .then(() => {
//         console.log('done')
//         process.exit()
//       })
//   }))
// })

//Async/Await方法
async function createSeed(seedUser) {
  try {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(seedUser.password, salt)
    const user = await User.create({
      name: seedUser.name,
      email: seedUser.email,
      password: hash
    })
    const userId = user._id
    seedUser.restaurants.forEach(restaurant => {
      restaurant.userId = userId
    })
    await Restaurant.create(seedUser.restaurants)
  } catch (error) {
    console.log(error)
  }
}

db.once('open', async () => {
  try {
    for (let i = 0; i < SEED_USERS.length; i++) {
      await createSeed(SEED_USERS[i])
    }
    console.log('done')
    process.exit()
  } catch (error) {
    console.log(error)
  }
})