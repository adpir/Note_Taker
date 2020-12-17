const app = require("express").Router();
const fs = require("fs");
let db = require("../db/db.json");

app.get("/api/notes", function (req, res) {
  fs.readFile("./db/db.json", (err, data) => {
    if (err) throw err;
    console.log(data);
    res.json(JSON.parse(data));
  });
});

app.post("/api/notes", function (req, res) {
  let newNote = fs.readFileSync("./db/db.json", "utf8");
  newNote = JSON.parse(newNote);
  newNote.push(req.body);
  console.log(req.body);
  for (let i = 0; i < newNote.length; i++) {
    newNote[i].id = i + 1;
  }

  newNote = JSON.stringify(newNote);
  fs.writeFileSync("./db/db.json", newNote);
  res.json(JSON.parse(newNote));
});

app.delete("/api/notes/:id", function (req, res) {
  fs.readFile("./db/db.json", (err, data) => {
    if (err) throw err;
    newNote = JSON.parse(data);
    console.log(newNote);
    for (let i = 0; i < newNote.length; i++) {
      if (newNote[i].id == req.params.id) {
        newNote.splice(i, 1);
        console.log(newNote);
      }
    }
    fs.writeFile("./db/db.json", JSON.stringify(newNote), (err) => {
      if (err) throw err;
      console.log(newNote);
      res.send(newNote);
    });
  });
});

module.exports = app;
