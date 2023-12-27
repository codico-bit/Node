const express = require('express');
const app = express();
const {products} = require('./data');

app.get('/',(req,res)=>{
    res.json(products);
})

app.listen(5000,()=>{
    console.log('The server is listening on 5000')
})
