const user=require('../models/newmodel')
const newgetController=(req,res)=>{
    res.status(200).json({
        
        user
    })
}
const newPostController=(req,res)=>{
    const {id,name,email}=req.body;
    const newuser={id,name,email}
    user.push(newuser)
    res.status(201).json({
        newuser
        
    })
}
const newPutController=(req,res)=>{
    const newid=req.params.id;
    const {id,name,email}=req.body;
    
   user.filter((u)=>u.id==newid).map((m)=>{
    m.id=id;
    m.name=name;
    m.email=email;
   })
    res.status(201).json({
      
        user
    })
}
const newdeleteController=(req,res)=>{
    const newid=req.params.id;
    
    
   user.filter((u)=>u.id!=newid)
    res.status(201).json({
      
        user
    })
}
module.exports={newgetController,newPostController,newPutController,newdeleteController}