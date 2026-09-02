const http=require("http")
const server=http.createServer((req,res)=>{
    if (req.url=="/"){
        res.writeHead(200,{"content-type":"text/html"})
        res.write('this is home page')
        res.end()
    }
     else if (req.url=="/about"){
        res.writeHead(200,{"content-type":"text/html"})
        res.write('this is about page')
        res.end()
    }
     else if (req.url=="/contact"){
        res.writeHead(200,{"content-type":"text/html"})
        res.write('this is contcat page')
        res.end()
    }

})
server.listen(5050)
console.log("serer run success")