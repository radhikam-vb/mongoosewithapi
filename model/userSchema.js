const mongoose = require('mongoose');
const bcrypt=require("bcrypt")
const userSchema = mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String,
    role:String,
    profile:String,
    username:String,
    password:String,
   
},
{timestamps:true}
);
userSchema.pre("save",async function(next){
    this.password=await bcrypt.hash(this.password,5);
    next();
  })
const userModel = mongoose.model("users", userSchema);

module.exports = userModel;