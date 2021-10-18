const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
      name: String,
      thumbnail:String,
      productGallery: String,
      description:String,
      basePrice: Number,
      sellPrice: Number,
      categoryName:  String,
      Tags:String,
      additionalInfo:String,
})
const productModel = mongoose.model("product",productSchema)
module.exports = productModel