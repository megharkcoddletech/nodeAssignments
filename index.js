const http = require("node:http");
http.createServer((req, res)=>{
    res.writeHead(200)    
    res.end("end of response")
});
