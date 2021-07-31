const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: false
  },
  currentOrder: String,
  previousOrders: [String]
});

// Mongoose Schema to automatically insert createdAt and updatedAt Fields in the database
UserSchema.plugin(timestamp);
module.exports = User = mongoose.model("users", UserSchema);
