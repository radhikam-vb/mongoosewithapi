const productModel=require("../model/productSchema");

const storeProduct = async(req,res)=>{
    try{
        const product = await new productModel(req.body);
    product.save();

    res.status(201).send(product);
    }
    catch(err){
        console.log(err)
    }
} //searching is done here
const getProducts = async (req, res) => {
    try {
        const productquery=req.query;
      const products = await productModel.find(productquery);
      res.status(200).send(products);
    } catch (error) {
        console.log("product error ")
    }
  };

const getproductDetail = async(req,res)=>{
    const {id} = req.params
    const productData = await productModel.find({_id:id})
    res.send(productData)
}
const updateproduct = async(req,res)=>{
    const {id} = req.params;
    const data = req.body
    const updatedData = await productModel.updateOne({_id:id},data)
    res.send(updatedData)
}

const deleteProduct = async(req,res)=>{
    const {id} = req.params;
    const deleteproduct = await productModel.deleteOne({_id:id})
    console.log(deleteproduct)
    res.send("Deleted succesfully")
}

module.exports={
    storeProduct,
  getProducts,
  getproductDetail,
  updateproduct,
  deleteProduct,
};

