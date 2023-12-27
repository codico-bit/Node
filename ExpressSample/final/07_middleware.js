const express = require('express');
const app = express();

// req => middleware => res

const logger = (req,res,next) =>{ //
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method,url,time);
    //when you work with middleware, you MUST pass it onto a next middleware
    next();
}

app.get('/', logger, (req,res)=>{
    /*
    //we write the below code as a function
    //and then use it as a middleware
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method,url,time);
    */
    res.send('Home');
    // you see GET / 2023 in the terminal
})

app.get('/about',logger, (req,res)=>{
    res.send('About');
})


app.listen(5000,()=>{
    console.log('The server is listening on 5000')
})