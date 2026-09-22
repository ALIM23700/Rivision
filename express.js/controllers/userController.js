const User = require("../models/user.model")

 const getdata=async(req,res)=>{
    const user=await User.find();
    res.status(200).json({
        user
    })
}
const createdata=async(req,res)=>{
    const {name,email,password}=req.body
    const user=await User.create({
        name,email,password
    });
    res.status(200).json({
        user
    })
}
const updatedata=async(req,res)=>{
    const {id}=req.params;
    const {name,email,password}=req.body
    const newuser=await User.findById(id)
    newuser.name=name;
    newuser.email=email;
    newuser.password=password;
    await newuser.save();

    res.status(200).json({
        newuser
    })
}
const deltedata=async(req,res)=>{
    const {id}=req.params;
    
    const newuser=await User.findByIdAndDelete(id)
   
    res.status(200).json({
        newuser
    })
}
module.exports={getdata,createdata,updatedata, deltedata}
