
//CommonJS, every file is module (by default)
//Modules - ENcapsulated Code (only share minimum)

const names = require('./4_name')
const sayHi = require('./5_utils')
const data = require('./6_alt')
require('./7_mind')//simply writing require and not
//assigning to anything will just run that code
//since we are calling the addValues() in ./7_mind
//hence that function is called 

//console.log(names);
console.log(data);
sayHi(names.john);
sayHi(names.peter);
sayHi('Susan');

