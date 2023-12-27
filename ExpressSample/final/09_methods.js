const express = require('express');
const app = express();

let {people} = require('./data')

//static assets
app.use(express.static('./methods-public'))


app.use(express.urlencoded({extended: false}))
//urlencoded is the middleware that
//we are using to parse incoming request
//bodies with the URL encoded data
/*
This middleware is specifically designed to 
handle data submitted through HTML forms with 
the application/x-www-form-urlencoded content 
type.

When a client submits a form with the method 
set to POST and the enctype attribute set to 
application/x-www-form-urlencoded, the data 
is sent as key-value pairs in the request body.
The express.urlencoded middleware parses this 
ata and makes it available in the req.body 
object.


*/

//get method, already used it plenty of times before this so 
//doesn't require further explaination/examples
app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true, data:people})
})

app.post('/login', (req,res) =>{
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send('Please Provide Credentials')
})



app.listen(5000,()=>{
    console.log('The server is listening on 5000')
})