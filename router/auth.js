const express = require("express");
const loginRouter = express.Router();
const login=require("../controller/authController");
loginRouter.post("/login", login);
module.exports=loginRouter;