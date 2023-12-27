const express = require('express');
const app = express();
const logger = require('./logger')
// req => middleware => res

/*
app.use('/api',logger)
//app.use will invoke it for any route after /api
*/
app.use([logger, authorize])
//app.use will invoke it for any route
//now it'll invoke both of the functions before any route




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
