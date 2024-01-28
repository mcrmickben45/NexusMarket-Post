const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  }],
  total: {
    type: Number,
    required: true,
  },
  // Add other fields as needed
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;