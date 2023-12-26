
const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt', {highWaterMark: 9000, encoding: 'utf8'});

stream.on('data',(result)=>{
    console.log(result);
})
stream.on('error',(err)=>console.log(err))

// default 64kb 
// first argument is path, the highWaterMark controls the batch size
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
