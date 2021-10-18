const bcrypt=require("bcrypt") 
const userModel = require("../model/userSchema");
 const login=async(req,res)=>{
    try {
        const userlogin=await userModel.findOne({email:req.body.email});
        if(!userlogin){
            return res.status(400).send("incorrect email ")
        }
        const isMatch=await bcrypt.compare(req.body.password,userlogin.password)
        if(!isMatch){
            return res.status(400).send("incorrect  password")
            
        }
        else{
            return res.status(800).send("login successfully")
        }
    } 
    catch (error) {
        console.error(error.message);
    }
}
module.exports=login

