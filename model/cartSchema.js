const mongoose = require('mongoose');
const cartSchema = mongoose.Schema({
    product: String,
      user:String,
      productqty:Number,
      basePrice:Number,
      sellPrice:Number,
      totalPrice:Number,
})
const cartModel = mongoose.model("cart",cartSchema)
module.exports = cartModel