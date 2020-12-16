// const http = require("http");
const fs = require("fs");


app.get("/",function(req,res){
    res.sendfile(path.join(__dirname,"notes.html"));
});

app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });
  
  // Displays all notes
  app.get("/api/notes", function(req, res) {
    return res.json(notes);
  });
  
  // Displays a single character, or returns false
  app.get("/api/notes/:notes", function(req, res) {
    let chosen = req.params.notes;
  
    console.log(chosen);
  
    for (let i = 0; i < notes.length; i++) {
      if (chosen === notes[i].routeName) {
        return res.json(characters[i]);
      }
    }
  
    return res.json(false);
  });
  