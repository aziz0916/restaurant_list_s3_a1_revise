const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant.js')
const sortResult = require('../../sort.js')

router.get('/', (req, res) => {
  return Restaurant.find()
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

router.get('/search', (req, res) => {
  let keyword = req.query.keyword

  return Restaurant.find()
    .lean()
    .then(restaurants => {
      restaurants = restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(keyword.toLowerCase().trim()) || restaurant.category.toLowerCase().includes(keyword.toLowerCase().trim()))
      if (!restaurants.length) {
        keyword = `您輸入的關鍵字：${keyword} 沒有符合條件的餐廳`
      }
      res.render('index', { restaurants, keyword })
    })
    .catch(error => console.log(error))
})

router.post('/sort', (req, res) => {
  const sort = req.body.sort
  // 建立sortResult函式來讓index畫面在得到不同sort值時產生不同的排序結果
  sortResult(sort, res, Restaurant)
})

module.exports = router
