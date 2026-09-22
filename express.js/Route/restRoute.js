const { getdata, createdata, updatedata, deltedata } = require('../controllers/userController')

const router3=require('express').Router()

router3.get("/get",getdata)
router3.post("/post",createdata)
router3.put("/put/:id",updatedata)
router3.delete("/delete/:id",deltedata)


module.exports=router3