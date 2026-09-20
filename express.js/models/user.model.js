const mongoose=require('mongoose')

const userSchima=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const User=mongoose.model("User",userSchima)
module.exports=User