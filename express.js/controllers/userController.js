const User=require('../models/user.model')
const getUser=async(req,res)=>{
    const user=await User.find();

    res.status(200).json({
        user
    })

}
const createUser=async(req,res)=>{
    const {name,email,password}=req.body
    const user=await User.create({
        name,email,password
    });

    res.status(200).json({
        user
    })

}
const updateUser=async(req,res)=>{
    const {name,email,password}=req.body
    const id=req.params.id;

    const user=await User.findById(id)
    
        user.name=name;
        user.email=email;
        user.password=password;

   await user.save();

    res.status(200).json({
        user
    })

}
const deleteUser=async(req,res)=>{
    
    const id=req.params.id;

    const user=await User.findByIdAndDelete(id)

    res.status(200).json({
        user
    })

}
module.exports={getUser,createUser,updateUser,deleteUser}