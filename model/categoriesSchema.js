const mongoose = require('mongoose');
const categoriesSchema = mongoose.Schema({
    name:String,
    slug:String,
    image:String,
    Description:String,
})
const categoriesModel = mongoose.model("categories",categoriesSchema)
module.exports = categoriesModel