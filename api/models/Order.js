const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");

const OrderSchema = new mongoose.Schema({
  cart: {
    type: [String],
    required: true
  },
  subTotal: {
    type: Number,
    required: true
  },
  orderId: {
    type: String,
    required: true
  },
  delivered: {
    type: Boolean,
    required: true
  },
  userEmail: {
    type: String,
    required: true
  }
});

// Mongoose Schema to automatically insert createdAt and updatedAt Fields in the database
OrderSchema.plugin(timestamp);
module.exports = Order = mongoose.model("orders", OrderSchema);
