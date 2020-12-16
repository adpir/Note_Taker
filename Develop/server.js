const express= require ("express");
const app =express();
const path =require ("path");

const PORT =process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "public")));

app.listen(PORT,function (){
console.log('server has initiated! at http://localhost:' + port);

})