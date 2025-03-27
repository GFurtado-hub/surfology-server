const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      
    },
    products: [{
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
      quantity: {
        type: Number,
        required: true,
        min: 1
      },
      priceAtPurchase: {
        type: Number,
        
      }
    }],
    totalAmount: {
      type: Number,
      
      min: 0
    },
    shippingAddress: {
      street: {
        type: String,
        
      },
      city: {
        type: String,
        
      },
      country: {
        type: String,
        
      },
      postalCode: {
        type: String,
        
      }
    },
  }, { timestamps: true });


  const Order = mongoose.model('Order', orderSchema);
  module.exports = Order;