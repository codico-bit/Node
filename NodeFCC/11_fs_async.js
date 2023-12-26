//this is the asynchronous approach
const { Console, log } = require('console');
const {readFile, writeFile} = require('fs')
//for asynchronous approach, we need to find a callback
console.log('Start')
readFile('./content/first.txt','utf8', (err,result) =>{
    //(err,result) is the callback function
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err, result)=>{
        if(err){
            console.log(err)
            return
        }//inevitebly we'll reach a callback hell where we are nesting many callbacks
        const second = result;
        writeFile('./content/result-async.txt',
        `Here is the result : ${first}, ${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log('Done with this task')
        })
    }

    )
})
console.log('Starting next task');