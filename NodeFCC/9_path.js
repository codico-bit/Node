const path = require('path');//built in module so we get it via require

console.log(path.sep)//the separator that is used in the system, example '/' is a separator


const filePath = path.join('/content','subfolder///','test.txt');
console.log(filePath);//you can add how many every ///, they format is
//such that it is a valid output that can be directly used

const base = path.basename(filePath)
console.log(base); //the final file

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)//path.resolve returns the absolute path, it receives a sequence of paths
//and then returns it in the formatted way