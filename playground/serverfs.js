const http = require("http");
const fs = require("fs");

//Create the server
const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
    fs.readFile("../somefile.txt",(err,file)=>{
        res.end(file);
    });
    
});

//Listen to the port
server.listen(8000);