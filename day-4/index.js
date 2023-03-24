const http  = require("http");

const server = http.createServer((request,response)=>{
    // console.log(server)
    if(request.url=="/"){
        response.end("This is home page")
    }else if(request.url==="/data"){
        response.end("Data will be here")
    }else if(request.url==="/reports"){
        response.end("reports")
    }
})
server.listen(4500,()=>{
console.log("The server is running at port 4500")
})