const userModel=require("../model/userSchema");

const storeUser = async(req,res)=>{
    try{
        const user = await new userModel(req.body);
    user.save();

    res.status(201).send(user);
    }
    catch(err){
        console.log(err)
    }
} 

const getUsers = async (req, res) => {
    try {
      const users = await userModel.find();
      res.status(200).send(users);
    } catch (error) {
        console.log("user error ")
    }
  };

const getuserDetail = async(req,res)=>{
    const {id} = req.params
    const userData = await userModel.find({_id:id})
    res.send(userData)
}



const updateuser = async(req,res)=>{
    const {id} = req.params;
    const data = req.body
    const updatedData = await userModel.updateOne({_id:id},data)
    res.send(updatedData)
}

const deleteUser = async(req,res)=>{
    const {id} = req.params;
    const deleteuser = await userModel.deleteOne({_id:id})
    console.log(deleteuser)
    res.send("Deleted succesfully")
}

module.exports={
    storeUser,
  getUsers,
  getuserDetail,
  updateuser,
  deleteUser,
};

