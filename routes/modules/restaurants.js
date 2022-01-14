const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant.js')

router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/', (req, res) => {
  const { id, name, name_en, category, image, location, phone, google_map, rating, description } = req.body

  return Restaurant.create({
    id: Number(id),
    name,
    name_en,
    category,
    image,
    location,
    phone,
    google_map,
    rating: Number(rating),
    description
  })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

router.get('/:restaurants_id', (req, res) => {
  const restaurants_id = req.params.restaurants_id

  return Restaurant.findById(restaurants_id)
    .lean()
    .then(restaurant => res.render('detail', { restaurant }))
    .catch(error => console.log(error))
})

router.get('/:restaurants_id/edit', (req, res) => {
  const restaurants_id = req.params.restaurants_id

  return Restaurant.findById(restaurants_id)
    .lean()
    .then(restaurant => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})

router.put('/:restaurants_id', (req, res) => {
  const restaurants_id = req.params.restaurants_id
  const { id, name, name_en, category, image, location, phone, google_map, rating, description } = req.body

  return Restaurant.findById(restaurants_id)
    .then(restaurant => {
      restaurant.id = Number(id)
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
    .then(() => res.redirect(`/restaurants/${restaurants_id}`))
    .catch(error => console.log(error))
})

router.delete('/:restaurants_id', (req, res) => {
  const restaurants_id = req.params.restaurants_id

  return Restaurant.findById(restaurants_id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router
