const express = require('express');
const app = express();

//let {people} = require('./data')
const people = require('./routes/people')

app.use(express.static('./methods-public'))

app.use(express.urlencoded({extended: false}))

app.use(express.json())
 
app.use('/api/people',people)
//we're adding the base here so we don't include it in people.js 

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
