const express = require('express');
const Router = express.Router();
const {
    storeTag,
    getTags,
    gettagDetail,
    updatetag,
    deleteTag,
    
}
     = require("../controller/tagController")

Router.post("/tags",storeTag)
Router.get("/tags",getTags)
Router.get("/tags/:id",gettagDetail)
Router.delete("/tags/:id",deleteTag)
Router.put("/tags/:id",updatetag)
module.exports = Router