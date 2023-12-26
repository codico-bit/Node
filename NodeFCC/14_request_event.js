const http = require('http')

//this was the original code we used
// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API, we have this alternate method of setting it up

const server = http.createServer()
// emits request event
// subcribe to it / listen for it / respond to it
server.on('request', (req, res) => {//server has the method on
    //we request for 'request' event, when the request comes in
  res.end('Welcome')//we had that callback function to respond to it
  //if we go to documentation, we see that 
  //http.Server uses Event: 'request', so we know that the server we create 
  //has the ability to listen to 'request' event
  //if you go into that, you'll see Extends:<Event Emitter>, 
  //Thus even though we may not be setting up Events ourselves, many built-in modules rely 
  //heavily on this concept of  Events
})

server.listen(5000)