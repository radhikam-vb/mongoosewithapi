const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const db = mongoose.connection;
const router = require("./router/userRouter");
const router1=require("./router/roleRouter");
const router2=require("./router/tagRouter");
const router3=require("./router/categoriesRouter");
const router4=require("./router/productRouter");
const router5=require("./router/cartRouter");
const router6=require("./router/orderRouter");
const router7=require("./router/auth");


app.use(express.json());
app.use(
    express.urlencoded({
        extended:true,
    })
)

app.get("/", (req, res) => res.send("ecommerce "));
app.use(router);
app.use(router1);
app.use(router2);
app.use(router3);
app.use(router4);
app.use(router5);
app.use(router6);
app.use(router7);

app.listen(port, () => {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/node-express");
    db.on("error", () => console.log(`Database connection error`));
    db.once("open", function () {
      console.log("Mongodb connected.");
    });
  } catch (error) {
    console.log(`someting went worng ${error}`);
  }
  console.log(`Example app listening on ${port} port!`);
});
