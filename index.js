//console.log("welcome to react node and mysql tutorial");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app=express();
const port=4000;
const RouterPath = require('./router');

app.use(bodyParser.json());
app.use(cors());
app.use("/",RouterPath);

app.listen(port,()=>console.log("Server runing on port"));