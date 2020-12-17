const app=require("express").Router()
const fs= require("fs");
let db = require("../db/db.json");

app.get("/api/notes",function(req,res){
fs.readFile("./db/db.json",(err, data) => {
   if (err) throw err;
    console.log(data);
     res.json(JSON.parse(data));

  });
    

});




    
   
   



module.exports=app
