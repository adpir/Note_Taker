const fs = require("fs");


 app.get("/", function(req, res) {
     res.json(path.join(__dirname, "public/index.html"));
   });

  