const mongoose = require('mongoose')
const timestamp = require('mongoose-timestamp')

const PricingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    required: false,
    default: 0
  },
  image: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: false,
    default: 'published'
  }
})

// Mongoose Schema to automatically insert createdAt and updatedAt Fields in the database
PricingSchema.plugin(timestamp)
module.exports = Post = mongoose.model("pricings", PricingSchema)