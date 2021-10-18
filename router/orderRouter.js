const express = require('express');
const Router = express.Router();
const {
    storeOrder,
    getOrders,
    getorderDetail,
    updateorder,
    deleteOrder,
    
}
     = require("../controller/orderController")

Router.post("/orders",storeOrder)
Router.get("/orders",getOrders)
Router.get("/orders/:id",getorderDetail)
Router.delete("/orders/:id",deleteOrder)
Router.put("/orders/:id",updateorder)
module.exports = Router