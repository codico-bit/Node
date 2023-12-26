const EventEmitter = require('events');
//we are getting back a class, we usually call it EventEmitter by practice
// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance

const customEmitter = new EventEmitter()

//on will listen for specific events
//emit will emit those events

customEmitter.on('response',(name, id) =>{
    console.log(`Data Recieved user ${name} with id:${id}`)
})
customEmitter.on('response',() =>{
    console.log(`Some other logic here`)
})
customEmitter.on('response',() =>{
    console.log(`And yet another other logic here`)
})


customEmitter.emit('response', 'john', 34);
//order matters, if .emit was before all the .on then we won't get any output

