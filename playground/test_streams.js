const http = require("http");
const fs = require("fs");

const server = http.createServer((request,response)=>{
    response.writeHead(200,{"Content-Type":"text/html"});
    
    //Create a readable stream
    var rstream = fs.createReadStream("./index.html");
    rstream.pipe(response);

    //Create a writeable stream
    var destFile = fs.createWriteStream("./second.html");
    rstream.on("data",(chunk)=>{
        destFile.write(chunk);
    });
    
    //On stream end
    rstream.on("end",(chunk)=>{
        rstream.close();
    });
});

server.listen(8000);