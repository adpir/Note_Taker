const app=require("express").Router()
const fs= require("fs");
let db = require("../db/db.json");

app.get("/api/notes",function(req,res){
    db=JSON.parse(fs.readFileSync("./db/db.json"))
    console.log(db);
    res.json(db);

});

//GET /api/notes - Should read the db.json file and return all saved notes as JSON.

//   app.get("/api/notes", function(req, res) {
//     return res.json(notes);
//   });

app.post("/api/notes", function(req, res) {
    let newNote= {
        id:Math.floor(Math.random()*100),
        title: req.body.title,
        text:req.body.text,
    }
    console.log("post",newNote)
    db.push(newNote);
    fs.writeFileSync("./db/db.json",JSON.stringify (db),function (error){
        if (error) throw error
        console.log(db);
        res.json(db);
    });
})

app.delete("/api/notes/id", function(req, res) {
    let newNote= []
    for(let i =0; i < db.length; i++) {
        if (db[i].id!==req.params.id){
            newNote.push(db[i]);
        }
    }
    
    console.log("delete",newNote)
    db=newNote
    fs.writeFileSync("./db/db.json",JSON.stringify (db),function (error){
        if (error) throw error
        console.log(db);
        res.json(db);
    });
})


module.exports=app
