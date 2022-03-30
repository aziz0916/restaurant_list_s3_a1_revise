const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant.js')

router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/', (req, res) => {
  const userId = req.user._id
  const { name, name_en, category, image, location, phone, google_map, rating, description } = req.body

  return Restaurant.create({
    name,
    name_en,
    category,
    image,
    location,
    phone,
    google_map,
    rating: Number(rating),
    description,
    userId
  })
    .then(() => res.redirect('/'))
    .catch(error => {
      console.log(error)
      res.render('errorPage', { status: 500, error: error.message })
    })
})

router.get('/:restaurants_id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.restaurants_id

  return Restaurant.findOne({ _id, userId })
    .lean()
    .then(restaurant => res.render('detail', { restaurant }))
    .catch(error => {
      console.log(error)
      res.render('errorPage', { status: 500, error: error.message })
    })
})

router.get('/:restaurants_id/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.restaurants_id

  return Restaurant.findOne({ _id, userId })
    .lean()
    .then(restaurant => res.render('edit', { restaurant }))
    .catch(error => {
      console.log(error)
      res.render('errorPage', { status: 500, error: error.message })
    })
})

router.put('/:restaurants_id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.restaurants_id
  const { name, name_en, category, image, location, phone, google_map, rating, description } = req.body

  return Restaurant.findOne({ _id, userId })
    .then(restaurant => {
      restaurant.name = name
      restaurant.name_en = name_en
      restaurant.category = category
      restaurant.image = image
      restaurant.location = location
      restaurant.phone = phone
      restaurant.google_map = google_map
      restaurant.rating = Number(rating)
      restaurant.description = description
      restaurant.save()
    })
    .then(() => res.redirect(`/restaurants/${_id}`))
    .catch(error => {
      console.log(error)
      res.render('errorPage', { status: 500, error: error.message })
    })
})

router.delete('/:restaurants_id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.restaurants_id

  return Restaurant.findOne({ _id, userId })
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => {
      console.log(error)
      res.render('errorPage', { status: 500, error: error.message })
    })
})

module.exports = router
