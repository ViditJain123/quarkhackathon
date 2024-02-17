const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNo: {
    type: String,
  },
  waNo: {
    type: String,
  },
  hostelName: {
    type: String,
  },
  roomNo: {
    type: String,
  },
  postedProducts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
