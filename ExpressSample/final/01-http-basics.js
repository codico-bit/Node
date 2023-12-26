const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    //status code and header (key value pair)
    res.write('<h1>Home Page</h1>')
    res.end()
    //the above is same as
    //res.end('<h1>Home Page</h1>')
})

server.listen(5000);//listens on port 5000


//everytime user hits the function, we have two functions, request and
//response which we shorten and write as req and res by convention



