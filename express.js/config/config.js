const mongoose=require('mongoose')

const connectDb=()=>{
    mongoose.connect('mongodb://localhost:27017/newalim')
.then(
    console.log("mongodb is connected")
)
.catch((e)=>{
    console.log("mongodb connection failed".e)
})
}
module.exports=connectDb