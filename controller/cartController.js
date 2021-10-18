const cartModel=require("../model/cartSchema");

const storeCart = async(req,res)=>{
    try{
        const cart = await new cartModel(req.body);
    cart.save();

    res.status(201).send(cart);
    }
    catch(err){
        console.log(err)
    }
} 
const getCarts = async (req, res) => {
    try {
      const carts = await cartModel.find();
      res.status(200).send(carts);
    } catch (error) {
        console.log("cart error ")
    }
  };

const getcartDetail = async(req,res)=>{
    const {id} = req.params
    const cartData = await cartModel.find({_id:id})
    res.send(cartData)
}

const updatecart = async(req,res)=>{
    const {id} = req.params;
    const data = req.body
    const updatedData = await cartModel.updateOne({_id:id},data)
    res.send(updatedData)
}

const deleteCart = async(req,res)=>{
    const {id} = req.params;
    const deletecart = await cartModel.deleteOne({_id:id})
    console.log(deletecart)
    res.send("Deleted succesfully")
}

module.exports={
    storeCart,
  getCarts,
  getcartDetail,
  updatecart,
  deleteCart,
};

