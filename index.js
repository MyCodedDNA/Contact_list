const express=require("express");
const port =8000;
const app=express();
const db=require("./db/mongoose");
const contact=require("./schemas/schema");

app.set("view engine","ejs");
app.set("views","views");

app.use(express.urlencoded());
app.use(express.static('./static'));
app.use("/",require("./routes/home"));



app.listen(port,function(err){
    if(err)
    {
        console.log("Error in listening");
        return;
    }
    console.log('server is running at port'+" "+port);
})