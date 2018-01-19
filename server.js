const http = require("http");
const server = http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/plain"});

    response.write(`Response item :\n${response}`);
    response.write(`\n\nRequest item :\n${request}`);
    response.end();
});

server.listen(8000);
console.log("Server is running")