const mongoose = require('mongoose');
const roleSchema = mongoose.Schema({
    name:String,
    slug:String,
})
const roleModel = mongoose.model("role",roleSchema)
module.exports = roleModel