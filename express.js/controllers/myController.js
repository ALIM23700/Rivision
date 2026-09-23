const Myuser=require('../models/myModel')
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const registerValidation = [
  body("name")
    .notEmpty()
    .withMessage("Name is required"),

  body("email")
    .isEmail()
    .withMessage("Enter a valid email"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters")
];
const register=async(req,res)=>{
    const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }
    const {name,email,password}=req.body
      const hashedPassword = await bcrypt.hash(password, 10);
    const myuser=await Myuser.create({
        name,email,password: hashedPassword
    })
    res.status(201).json({
        message:"registration successful",
        myuser

    })
}
const login=async(req,res)=>{
    const {email,password}=req.body
    const user=await Myuser.findOne({email})
    if(!user){
        res.status(404).json("user not found")

    }
      const isMatch = await bcrypt.compare(password, user.password);
 
  if (!isMatch) {
    return res.status(401).json({
      message: "Wrong password"
    });
  }
  res.status(200).json({
    message: "Login successful"
  });
}
module.exports={register,login,registerValidation}