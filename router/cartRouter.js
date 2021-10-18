const express = require('express');
const Router = express.Router();
const {
    storeCart,
    getCarts,
    getcartDetail,
    updatecart,
    deleteCart,
    
}
     = require("../controller/cartController")

Router.post("/carts",storeCart)
Router.get("/carts",getCarts)
Router.get("/carts/:id",getcartDetail)
Router.delete("/carts/:id",deleteCart)
Router.put("/carts/:id",updatecart)
module.exports = Router