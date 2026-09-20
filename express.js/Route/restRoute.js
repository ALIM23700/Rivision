const {getUser, createUser, updateUser, deleteUser} = require('../controllers/userController')

const router3=require('express').Router()

router3.get("/get",getUser)
router3.post("/post",createUser)
router3.put("/update/:id",updateUser)
router3.delete("/delete/:id",deleteUser)

module.exports=router3