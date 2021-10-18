const express = require('express');
const Router = express.Router();
const {
    storeCategories,
  getCategories,
  getcategoriesDetail,
  updatecategories,
  deleteCategories,
    
}
     = require("../controller/categoriesController");

Router.post("/categories",storeCategories)
Router.get("/categories",getCategories)
Router.get("/categories/:id",getcategoriesDetail)
Router.delete("/categories/:id",deleteCategories)
Router.put("/categories/:id",updatecategories)
module.exports = Router