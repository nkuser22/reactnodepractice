//console.log("welcome to react node and mysql tutorial");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app=express();
const port=4000;
const RouterPath = require('./router');
const sqlDbconnect=require('./dbconnect');

app.use(bodyParser.json());
app.use(cors());
app.use("/",RouterPath);
app.use("/api/user",RouterPath);
app.use("/api/adduser",RouterPath);
app.use("/api/registeruserdata",RouterPath);
app.use("/login",RouterPath);




app.listen(port,()=>console.log("Server runing on port"));