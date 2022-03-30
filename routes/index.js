const express = require('express')
const router = express.Router()

const home = require('./modules/home.js')
const restaurants = require('./modules/restaurants.js')
const users = require('./modules/users')
const { authenticator } = require('../middleware/auth')

router.use('/restaurants', authenticator, restaurants)
router.use('/users', users)
router.use('/', authenticator, home)

module.exports = router
