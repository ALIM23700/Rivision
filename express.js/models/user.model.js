const mongoose=require('mongoose')

const userSchima=mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const User=mongoose.model("User",userSchima)
module.exports=User