const express=require('express');
const {getcontroller,postcontroller,puttcontroller,deletecontroller} = require('../controllers/controller');
const router=express.Router();
router.get("/",getcontroller)
router.post("/",postcontroller)
router.put("/",puttcontroller)
router.delete("/",deletecontroller)
router.get("/register",(req,res)=>{
    const id=req.query.id;
    res.status(200).send(`student id is:${id}`)
     
})
router.get("/userId/:id/userAge/:age",(req,res)=>{
    const id=req.params.id;
     const age=req.params.age;
    res.status(200).send(`student id is:${id},age is :${age}`)
     
})
router.get("/header",(req,res)=>{
    const name=req.header("name");
     const age=req.header("age");
    res.status(200).send(`student id is:${name},age is :${age}`)
     
})


module.exports=router;