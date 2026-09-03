const express=require("express");
const router = require("./Route/userRouter");

const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/",router)
app.get("/view",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html")
})
app.get("/triangle",(req,res)=>{
    res.sendFile(__dirname+"/views/triangle.html")
})
app.get("/rectangle",(req,res)=>{
    res.sendFile(__dirname+"/views/rectangle.html")
})
app.post("/triangle",(req,res)=>{
    const height=req.body.height;
    const width=req.body.width;
    const area=.5*height*width;
    res.send(`area of triangle is:${area}`);
})
app.post("/rectangle",(req,res)=>{
    const height=req.body.height;
    const width=req.body.width;
    const area=.5*height*width;
    res.send(`area of rectangle is:${area}`);
})

app.get("/user",(req,res)=>{
   
    res.sendFile(__dirname+"/views/user.html")
})
const myMiddleware=(req,res,next)=>{
    console.log("middleware function")
    next()
}

app.post("/user",myMiddleware,(req,res)=>{
    const name=req.body.name;
    res.send(`registration successful"${name}`)
})


module.exports=app