const categoriesModel=require("../model/categoriesSchema");

const storeCategories = async(req,res)=>{
    try{
        const categories = await new categoriesModel(req.body);
    categories.save();

    res.status(201).send(categories);
    }
    catch(err){
        console.log(err)
    }
} 
const getCategories = async (req, res) => {
    try {
      const categoriess = await categoriesModel.find();
      res.status(200).send(categoriess);
    } catch (error) {
        console.log("categories error ")
    }
  };

const getcategoriesDetail = async(req,res)=>{
    const {id} = req.params
    const categoriesData = await categoriesModel.find({_id:id})
    res.send(categoriesData)
}
const updatecategories = async(req,res)=>{
    const {id} = req.params;
    const data = req.body
    const updatedData = await categoriesModel.updateOne({_id:id},data)
    res.send(updatedData)
}

const deleteCategories = async(req,res)=>{
    const {id} = req.params;
    const deletecategories = await categoriesModel.deleteOne({_id:id})
    console.log(deletecategories)
    res.send("Deleted succesfully")
}

module.exports={
    storeCategories,
  getCategories,
  getcategoriesDetail,
  updatecategories,
  deleteCategories,
};

