const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
    userId: Number,
    totalItems: Number,
      products:String,
      billingAddress: String,
      shippingAddress: String,
      transactionStatus: {
        type: String,
        enum: ['successfull', 'unsuccessfull'],
      },
      paymentMode: {
        type: String,
        enum: ['COD','paytm', 'upi', 'debit card', 'credit card', 'net banking'],
       },
      paymentStatus: {
        type: String,
        enum: ['successfull', 'unsuccessfull'],
    },
      orderStatus:{ 
        type:String,
        enum:['successfull', 'unsuccessfull'],
       
},
      })
const orderModel = mongoose.model("order",orderSchema)
module.exports = orderModel