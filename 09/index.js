// index.js

const http = require('http');
const server = http.createServer((req,res)=>{
    res.statusCode = 201;
    res.setHeader("MERN-BATCH","N EIGHT"); 
    res.end("Hello OStad");
})
server.listen(5050,()=>{
    console.log("Server is running on 5050");
})