const express= require ("express");
const app =express();
const path =require ("path");
const html=require("./routes/html");
const api=require("./routes/api")

const PORT =process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(html);
app.use(api);

app.listen(PORT,function (){
console.log('server has initiated! at http://localhost:' + PORT);

})