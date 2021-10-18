const express = require('express');
const Router = express.Router();
const {
    storeProduct,
  getProducts,
  getproductDetail,
  updateproduct,
  deleteProduct,
    }
     = require("../controller/productController")

Router.post("/products",storeProduct)
Router.get("/products",getProducts)
Router.get("/products/:id",getproductDetail)
Router.delete("/products/:id",deleteProduct)
Router.put("/products/:id",updateproduct)
module.exports = Router