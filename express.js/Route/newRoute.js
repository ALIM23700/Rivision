const {newgetController,newPostController, newPutController,newdeleteController} = require('../controllers/newController')

const router2=require('express').Router()

router2.get("/",newgetController)
router2.post("/post",newPostController)
router2.put("/put/:id",newPutController)
router2.put("/delete/:id",newdeleteController)

module.exports=router2