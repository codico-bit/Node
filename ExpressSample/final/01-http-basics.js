const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('User hit the server')
    res.end('Home Page')
})

server.listen(5000);//listens on port 5000


//everytime user hits the function, we have two functions, request and
//response which we shorten and write as req and res by convention


