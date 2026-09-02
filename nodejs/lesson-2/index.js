const fs=require('fs')

fs.writeFile('demo1.txt',"this is sample text",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("succesful")
    }
})
fs.readFile('demo1.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})
fs.rename('demo1.txt',"demo2.txt",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("succesful")
    }
})
fs.unlink('demo1.txt',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("succesful")
    }
})