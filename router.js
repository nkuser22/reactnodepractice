const express = require("express");
const Router = express.Router();

Router.get("/",(req,resp)=>{
    const userData=[{name:"Jhon",email:"jhon12@gmail.com",mobile:8765434567,age:23},
        {name:"David",email:"David@gmail.com",mobile:8765434567,age:25} 
    ];
    resp.send(userData);
});

module.exports=Router;