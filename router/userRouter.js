const express = require('express');
const Router = express.Router();
const {
    storeUser,
    getUsers,
    getuserDetail,
    updateuser,
    deleteUser,
    
}
     = require("../controller/userController")

Router.post("/users",storeUser)
Router.get("/users",getUsers)
Router.get("/users/:id",getuserDetail)
Router.delete("/users/:id",deleteUser)
Router.put("/users/:id",updateuser)
module.exports = Router