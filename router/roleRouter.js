const express = require('express');
const Router = express.Router();
const {
    storeRole,
  getRoles,
  getroleDetail,
  updaterole,
  deleteRole,
    
}
     = require("../controller/roleController")

Router.post("/roles",storeRole)
Router.get("/roles",getRoles)
Router.get("/roles/:id",getroleDetail)
Router.delete("/roles/:id",deleteRole)
Router.put("/roles/:id",updaterole)
module.exports = Router