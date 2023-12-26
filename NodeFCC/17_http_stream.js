
/*
This initial method works but you are sending 1.8MB when the request is sent
We prefer to send in much smaller batches instead of sending such 
large chunks of data together
*/
var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    const text = fs.readFileSync('./content/big.txt', 'utf8')
    res.end(text)
  })
  .listen(5000)
