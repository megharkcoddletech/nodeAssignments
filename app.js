const http = require('http');
const port = process.env.port || 5000;

http.createServer((req, res) =>{
    res.writeHead(200);
    const url =req.url
    if(url === "/profile"){
        res.write("welcome to profile");
    }
    else{
        res.write("welcome to API");
    }
    res.end();

}).listen(port, ()=>{
    console.log(`server listening on port ${port}`);
});