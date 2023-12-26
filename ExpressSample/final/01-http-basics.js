const http = require('http');

const {readFileSync, read} = require('fs');

//get all files
const homePage = readFileSync('./index.html');
//if we placed it inside the if block, then we would request it everytime
//instead we place it here so its called only in the beginning

const server = http.createServer((req,res)=>{
    
    const url = req.url
    if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()   
    }else if(url==='/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About Page</h1>')
        res.end() 
    }else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>Page not found</h1>')
        res.end() 
    }
    //status code and header (key value pair)
    //console.log(req.method);
    //console.log(req.url); // outputs '/contact' if we're accessing contact, '/' if nothing
    
    
    /*res.write('<h1>Home Page</h1>')
    res.end()
    //the above is same as
    //res.end('<h1>Home Page</h1>')*/
})

server.listen(5000);//listens on port 5000


//everytime user hits the function, we have two functions, request and
//response which we shorten and write as req and res by convention



