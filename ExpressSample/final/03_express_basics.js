const express = require('express');
const app = express();

//same as const app = require('express')();

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