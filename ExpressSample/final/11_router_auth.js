const express = require('express');
const app = express();

//let {people} = require('./data')
const people = require('./routes/people')
const auth = require('./routes/auth')

app.use(express.static('./methods-public'))

app.use(express.urlencoded({extended: false}))

app.use(express.json())
 
app.use('/api/people',people)
//we're adding the base here so we don't include it in people.js 
app.use('/login',auth)


app.listen(5000,()=>{
    console.log('The server is listening on 5000')
})