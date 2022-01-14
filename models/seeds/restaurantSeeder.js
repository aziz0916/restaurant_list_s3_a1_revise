const db = require('../../config/mongoose.js')
const Restaurant = require('../restaurant.js')
const restaurantList = require('../../restaurant.json').results

db.once('open', () => {
  Restaurant.create(restaurantList)
    .then(() => {
      console.log('done.')
      db.close() // 關閉MongoDB
    })
    .catch(error => console.log(error))
    .finally(() => process.exit()) // 結束程式執行
})
