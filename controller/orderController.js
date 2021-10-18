const orderModel=require("../model/orderSchema");

const storeOrder = async(req,res)=>{
    try{
        const order = await new orderModel(req.body);
    order.save();

    res.status(201).send(order);
    }
    catch(err){
        console.log(err)
    }
} 
const getOrders = async (req, res) => {
    try {
      const orders = await orderModel.find();
      res.status(200).send(orders);
    } catch (error) {
        console.log("order error ")
    }
  };

const getorderDetail = async(req,res)=>{
    const {id} = req.params
    const orderData = await orderModel.find({_id:id})
    res.send(orderData)
}

const updateorder = async(req,res)=>{
    const {id} = req.params;
    const data = req.body
    const updatedData = await orderModel.updateOne({_id:id},data)
    res.send(updatedData)
}

const deleteOrder = async(req,res)=>{
    const {id} = req.params;
    const deleteorder = await orderModel.deleteOne({_id:id})
    console.log(deleteorder)
    res.send("Deleted succesfully")
}

module.exports={
    storeOrder,
  getOrders,
  getorderDetail,
  updateorder,
  deleteOrder,
};

