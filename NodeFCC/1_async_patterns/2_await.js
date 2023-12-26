const {readFile, writeFile} = require('fs');

const util = require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);
/*
const getText = (path) =>{
    return new Promise((resolve,reject)=>{
        readFile(path, 'utf8', (err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}*/

//getText('./content/first.txt').then(result=>console.log(result)).catch(err=>console.log(err))

const start = async() =>{
    try{
        const first = await readFilePromise('./content/first.txt', 'utf8');
        //if we don't add the encoding 'utf8' then we'll get the buffer output
        const second = await readFilePromise('./content/second.txt', 'utf8');
        await writeFilePromise('./content/result-mind-grenade.txt',`APPENDED THIS : ${first} ${second}` ) 
        
        console.log(first, second);
    } catch(error) {
        console.log(error);
    }
}
start()

