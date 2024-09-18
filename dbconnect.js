const mysql=require("mysql");
const sqlconnect=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"reactnodemysql2",
    multipleStatements:true
});

sqlconnect.connect((err)=>{
    if(!err){
         console.log("Database Connected!");
    }else{
         console.log("Not Connected");
}
});

module.exports =sqlconnect;