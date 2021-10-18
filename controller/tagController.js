const tagModel=require("../model/tagSchema");

const storeTag = async(req,res)=>{
    try{
        const tag = await new tagModel(req.body);
    tag.save();

    res.status(201).send(tag);
    }
    catch(err){
        console.log(err)
    }
} 

const getTags = async (req, res) => {
    try {
      const Tags = await tagModel.find();
      res.status(200).send(Tags);
    } catch (error) {
        console.log("tag error ")
    }
  };

const gettagDetail = async(req,res)=>{
    const {id} = req.params
    const tagData = await tagModel.find({_id:id})
    res.send(tagData)
}
const updatetag = async(req,res)=>{
    const {id} = req.params;
    const data = req.body
    const updatedData = await tagModel.updateOne({_id:id},data)
    res.send(updatedData)
}
const deleteTag = async(req,res)=>{
    const {id} = req.params;
    const deletetag = await tagModel.deleteOne({_id:id})
    console.log(deletetag)
    res.send("Deleted succesfully")
}

module.exports={
    storeTag,
  getTags,
  gettagDetail,
  updatetag,
  deleteTag,
};

