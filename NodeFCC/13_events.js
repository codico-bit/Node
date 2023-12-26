const EventEmitter = require('events');
//we are getting back a class, we usually call it EventEmitter by practice
// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance

const customEmitter = new EventEmitter()

//on will listen for specific events
//emit will emit those events

customEmitter.on('response',() =>{
    console.log(`Data Recieved`)
})
customEmitter.emit('response');
