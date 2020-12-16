// const http = require("http");
const fs = require("fs");
// const db = require("db.json")

app.get("/",function(req,res){
    res.sendfile(path.join(__dirname,"notes.html"));
});

//GET /api/notes - Should read the db.json file and return all saved notes as JSON.
function handleNoteSave (req,res){
    fs.readFile(__dirname + "db.json")
}

//   app.get("/api/notes", function(req, res) {
//     return res.json(notes);
//   });

//   app.get("/api/notes/:notes", function(req, res) {
//     let chosen = req.params.notes;

//     console.log(chosen);

//     for (let i = 0; i < notes.length; i++) {
//       if (chosen === notes[i].routeName) {
//         return res.json(characters[i]);
//       }
//     }

//     return res.json(false);
//   });
