const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant.js')
const getSortQuery = require('../../sort.js')

router.get('/', (req, res) => {
  let keyword = !req.query.keyword ? '' : req.query.keyword.trim()
  const sortCondition = getSortQuery(Number(req.query.sort))
  const userId = req.user._id

  //$regex, $option是mongodb字串查詢匹配的用法，$regex: keyword是指查詢字串與keyword匹配，$options: 'i'是指不分大小寫
  return Restaurant.find({ $and: [{ $or: [{ name: { $regex: keyword, $options: 'i' } }, { category: { $regex: keyword, $options: 'i' } }] }, { userId }] })
    .lean()
    //sortCondition會回傳如{ name: 'asc' }，sort(sortCondition)等於sort({ name: 'asc' })
    .sort(sortCondition)
    .then(restaurants => {
      if (!restaurants.length) {
        keyword = `您輸入的關鍵字：${keyword} 沒有符合條件的餐廳`
      }
      res.render('index', { restaurants, keyword, sort: req.query.sort })
    })
    .catch(error => {
      console.log(error)
      res.render('errorPage', { status: 500, error: error.message })
    })
})

module.exports = router
