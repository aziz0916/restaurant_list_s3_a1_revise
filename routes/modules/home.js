const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant.js')

router.get('/', (req, res) => {
  let keyword = !req.query.keyword ? '' : req.query.keyword.trim()
  const sort = req.query.sort
  let sortSelect = {}

  if (Number(sort) === 1) {
    sortSelect = { name: 'asc' }
  } else if (Number(sort) === 2) {
    sortSelect = { name: 'desc' }
  } else if (Number(sort) === 3) {
    sortSelect = { category: 'asc' }
  } else if (Number(sort) === 4) {
    sortSelect = { location: 'asc' }
  } else {
    sortSelect = {}
  }

  return Restaurant.find({ $or: [{ name: { $regex: keyword, $options: 'i' } }, { category: { $regex: keyword, $options: 'i' } }] })
    .lean()
    .sort(sortSelect)
    .then(restaurants => {
      if (!restaurants.length) {
        keyword = `您輸入的關鍵字：${keyword} 沒有符合條件的餐廳`
      }
      res.render('index', { restaurants, keyword, sort })
    })
    .catch(error => {
      console.log(error)
      res.render('errorPage', { status: 500, error: error.message })
    })
})

module.exports = router
