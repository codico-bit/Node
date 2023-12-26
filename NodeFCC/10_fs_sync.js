//this is the synchronous approach
const {readFileSync, writeFileSync} = require('fs')
//const {readFileSync} = require('fs');
//above line is same as below 
//const fs = require('fs'); fs.readFileSync;
console.log('Start')
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
//we provide two parameters
//first parameter is the path of the file
//second parameter is the type of encoding
//utf8 is the default anyways 


console.log(first,second); //outputs the text in the two files
writeFileSync(
    './content/result.txt',
    `Here is the result : ${first},${second}`,
    {flag: 'a'}    
)
//if file isn't already there to write in, node will create one
//if file is there, the content is just overwritten with the new content
//but now since we used {flag:'a'}, now it will append it to the file instead of overwriting

console.log('Done with this task')
console.log('Starting next task')