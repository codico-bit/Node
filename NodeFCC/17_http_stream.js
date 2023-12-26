var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res) //the pipe pushes the readstream into writestream
      //so we can read in chunks, as well as write in chunks
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)
//in Networks,  if we take a look at the headers, the response headers are chunked

/*
This initial method works but you are sending 1.8MB when the request is sent
We prefer to send in much smaller batches instead of sending such 
large chunks of data together

var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    const text = fs.readFileSync('./content/big.txt', 'utf8')
    res.end(text)
  })
  .listen(5000)
*/