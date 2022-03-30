const mongoose = require('mongoose')
const Schema = mongoose.Schema
const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  name_en: String,
  category: String,
  image: String,
  location: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  google_map: String,
  rating: Number,
  description: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    index: true,
    required: true
  }
})

module.exports = mongoose.model('Restaurant', restaurantSchema)
