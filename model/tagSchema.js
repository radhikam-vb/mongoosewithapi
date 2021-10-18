const mongoose = require('mongoose');
const tagSchema = mongoose.Schema({
    name:String,
    slug:String,
})
const tagModel = mongoose.model("tag",tagSchema)
module.exports = tagModel