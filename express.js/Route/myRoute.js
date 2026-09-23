const { register, login, registerValidation } = require('../controllers/myController')

const router4=require('express').Router()

router4.post("/register",registerValidation,register)
router4.post("/login",login)
module.exports=router4