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

//Now we use another middleware to parse .json data
app.use(express.json())


//get method, already used it plenty of times before this so 
//doesn't require further explaination/examples
app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true, data:people})
})


app.post('/api/people', (req,res) =>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false, msg:'please provide name value'})
    }
    res.status(201).json({success:true, person:name})
})

app.post('/api/postman/people', (req,res) =>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false, msg:'please provide name value'})
    }
    res.status(201).json({success:true, data: [...people, name]})//we created another method via postman where we add it at the end of the data
})

app.post('/login', (req,res) =>{
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send('Please Provide Credentials')
})

//put method is for updating the data while post is for inserting data
app.put('/api/people/:id',(req,res)=>{
    const {id} = req.params
    const {name} = req.body
    
    const person = people.find((person)=>person.id===Number(id))
    if(!person){
        return res.status(404).json({success:false, msg:`no  person with id ${id}`})
    }
    const newPeople = people.map((person)=>{
        if(person.id===Number(id)){
            person.name = name;
        }
        return person
    })
    res.status(200).json({success:true,data: newPeople})
 })



app.listen(5000,()=>{
    console.log('The server is listening on 5000')
})

