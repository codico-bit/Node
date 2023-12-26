const express = require('express');
const app = express();

//same as const app = require('express')();


app.get('/',(req,res)=>{
    res.status(200).send('Home Page');
    console.log('User hit the resource');
})
//everytime user navigates to the root, we get the above output

app.get('/about',(req,res)=>{
    res.status(200).send('About Page');
})

//now for the remaining, we use .all, since it'll work for all of them
app.all('*',(req,res)=>{
    res.status(404).send('<h1>Resource Not Found</h1>');
})

app.listen(5000,()=>{
    console.log('The server is listening on 5000')
})
//most commonly used methods
// app.get
// app.post
// app.put
// app.delete
//the above four are just http verb methods
//GET - Read Data
//POST - Insert Data
//PUT - Update Data
//DELETE - Delete Data
// app.all - Works with all of them
// app.use - Responsible for middleware, crucial part of express.js
// app.listen - listens on a port

