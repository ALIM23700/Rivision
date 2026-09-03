const getcontroller=(req,res)=>{
    res.send("i am get request")
}
const postcontroller=(req,res)=>{
     res.send("i am post request")
}
const puttcontroller=(req,res)=>{
     res.send("i am put request")
}
const deletecontroller=(req,res)=>{
     res.send("i am delete request")
}

module.exports={getcontroller,postcontroller,puttcontroller,deletecontroller}