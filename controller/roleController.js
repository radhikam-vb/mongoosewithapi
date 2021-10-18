const roleModel=require("../model/roleSchema");

const storeRole = async(req,res)=>{
    try{
        const role = await new roleModel(req.body);
    role.save();

    res.status(201).send(role);
    }
    catch(err){
        console.log(err)
    }
} 

const getRoles = async (req, res) => {
    try {
      const roles = await roleModel.find();
      res.status(200).send(roles);
    } catch (error) {
        console.log("role error ")
    }
  };

const getroleDetail = async(req,res)=>{
    const {id} = req.params
    const roleData = await roleModel.find({_id:id})
    res.send(roleData)
}



const updaterole = async(req,res)=>{
    const {id} = req.params;
    const data = req.body
    const updatedData = await roleModel.updateOne({_id:id},data)
    res.send(updatedData)
}

const deleteRole = async(req,res)=>{
    const {id} = req.params;
    const deleterole = await roleModel.deleteOne({_id:id})
    console.log(deleterole)
    res.send("Deleted succesfully")
}

module.exports={
    storeRole,
  getRoles,
  getroleDetail,
  updaterole,
  deleteRole,
};

