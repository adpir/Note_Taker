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


app.post("/api/notes", function(req, res) {
    let newNote= fs.readFileSync("./db/db.json", "utf8");
    newNote = JSON.parse(newNote);
    newNote.push(req.body);
    console.log(req.body);
    for(let i=0; i < newNote.length; i++) {
        newNote[i].id=i;
    }
        // id:Math.floor(Math.random()*100),
        // title: req.body.title,
        // text:req.body.text,
    newNote=JSON.stringify(newNote);
    fs.writeFileSync("./db/db.json",newNote);
    res.json(JSON.parse(newNote));
    

    // console.log("post",newNote)
    // db.push(newNote);
    // fs.writeFileSync("./db/db.json", (db),function (error){
    //     if (error) throw error
    //     console.log(db);
    //     res.json(db);
    // });
})




module.exports=app