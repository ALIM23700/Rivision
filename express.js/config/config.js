const mongoose=require('mongoose')

const connecdb=()=>{
    mongoose.connect("mongodb://localhost:27017/newalim")
.then(
    console.log("mongodb is connected")
)
.catch((e)=>{
    console.log("mongodb connection failed",e)
})
}
module.exports=connecdb