//Simple example of server side routing using Node.js and http module
const http = require('http')
//createServer method is looking for a callback function
//it involves two methods
//first parameter represents incoming request
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    else if(req.url === '/about'){
        res.end('Here is our short story')
    }
    else {res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for </p>
    <a href="/">back home</a>
    `)
    }
})

server.listen(5000)