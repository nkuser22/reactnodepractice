const express = require("express");
const Router = express.Router();
const sqlDbconnect=require('./dbconnect');
const jwt =require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// Secret key for JWT
const JWT_SECRET = 'your_jwt_secret_key'; // Replace with a secure key
//console.log(bcrypt);
const app = express();
app.use(express.json());

Router.get("/",(req,resp)=>{
    const userData=[{name:"Jhon singh",email:"jhon12@gmail.com",mobile:8765434567,age:23,userid:54367},
        {name:"David singh",email:"David@gmail.com",mobile:8765434567,age:25,userid:54367} 
    ];
    resp.send(userData);
});

Router.get('/api/user',(req,resp)=>{
    sqlDbconnect.query("SELECT * from users",(err,rows)=>{
        if(!err){
            resp.send(rows);

        }else{
            resp.send("Data Not Found");
            //console.log(err);
        }
    });
});

Router.get('/api/country',(req,resp)=>{
    sqlDbconnect.query("Select * from countries",(err,result)=>{
        if(!err){
            resp.send(result);
        }else{
            resp.send("Country data not found");
        }
    });
});
Router.get('/api/state/:id',(req,resp)=>{
    sqlDbconnect.query("Select * from states Where country_id='"+req.params.id+"'",(err,result)=>{
        if(!err){
            resp.send(result);
        }else{
            resp.send("State data not found");
        }
    });
});

Router.post("/api/adduser",(req,resp)=>{
    const name=req.body.name;
    const username=req.body.username;
    const email=req.body.email;
    const password=req.body.password;
    const mobile=req.body.mobile;
    const gender=req.body.gender;
    const countryid=req.body.countryid;
    const stateid=req.body.stateid;
    const address1=req.body.address1;
    const address2=req.body.address2;
    const accept=req.body.accept;
    const status=1;
      // Hash password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return resp.json({ error: 'Error hashing password' });
     }

    var sql= `INSERT INTO users (status,name,username,email,password,mobile,gender,countryid,stateid,address1,address2,accept) 
    VALUES("${status}","${name}","${username}","${email}","${hashedPassword}","${mobile}","${gender}","${countryid}","${stateid}","${address1}","${address2}","${accept}")`;
    sqlDbconnect.query(sql,(err,result)=>{
        if(!err){
            resp.status(200).json("User Registration Inserted Sucessfully!");

        }else{
            console.log(err);
        }
    });
});
});

Router.get("/api/registeruserdata",(req,resp)=>{
    var sqluser = `SELECT ur.name,ur.username,ur.email,ur.mobile,ur.gender,ur.address1,ur.address2,ur.status,c.name as countryname,s.name as statename FROM users as ur
     join countries as c on c.id=ur.countryid
     join states as s on s.id=ur.stateid
     WHERE ur.status=1`;
     sqlDbconnect.query(sqluser,(err,result)=>{
        if(!err){
            resp.status(200).json(result);

        }else{
            console.log(err);
        }
    });
});

// LOGIN API
Router.post('/api/login' , async (req,resp)=>{

   const {username , password}=req.body;
  
   if(!username || !password){
    return resp.status(400).json({ error: 'Username and password are required' });
   }

    const sqllogin='SELECT * FROM users WHERE username=?';
    
        sqlDbconnect.query(sqllogin, [username], async (err, results) => {
            if (err) {
              return res.status(500).json({ message: 'Database error' });
            }
        
        
            if(results.length===0){
            return resp.json({ error: 'Invalid username or password' });
        }

       const user = results[0];
       const isMatch = await bcrypt.compare(password, user.password);
       //console.log(isMatch);

       if (isMatch) {
        resp.json({ message: 'Login successful' });
       } else {
        resp.status(401).json({ message: 'Invalid username or password' });
       }
   });
   //resp.send(req.body);

});



//FILTER  API WITH NAME

// Route to filter users by name
Router.get('/api/username/:name', (req, res) => {
    const { name } = req.query.name; // Get the name from query parameter
    
    if (!name) {
      return res.status(400).json({ message: 'Name query parameter is required' });
    }
  
    // Prepare SQL query with name filter
    const sql = 'SELECT * FROM users WHERE name LIKE ?';
    const values = [`%${name}%`]; // Use % for partial match
  
    sqlDbconnect.query(sql, values, (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Database error' });
      }
      res.json(results);
    });
  });






module.exports=Router;