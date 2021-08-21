const express=require("express");
const mongoose = require('mongoose') 
const app=express();
const cors = require('cors')


var user={
    "user1":{
        "name":"abc",
        "password":"password",
        "id":1
    }
}
app.get('/user',function(req,res){
    res.send(user);
})

app.get("/app/Video",function(req,res){
    res.send("welcome")
})

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected for Cleverly English"))

app.use(express.json())
app.use(cors())

const PORT=4000;
app.listen(PORT,function() {
    console.log("Listening to 4000");
})