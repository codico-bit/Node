const express = require('express');
const app = express();
const path = require('path');

//now we have the same error we encountered while using only https 
//however in express, we can just use app.use to fix it
app.use(express.static('./public'))
//app.use is for setting up the middleware
//what does static mean? 
/*
it means that the server doesn't have to change the file
since it is a static asset, we can just place it in a folder
and we dump all the assets in there, in that folder
it'll automatically set up all the paths etc for them
example of static files: image file, javascript file
Wait but how is javascript another static asset, 
it makes it dynamic on the browser, but on the server 
its just a static thing
*/
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'));
    console.log('User hit the resource');
})

/*
app.get('/about',(req,res)=>{
    res.status(200).send('About Page');
})*/

app.all('*',(req,res)=>{
    res.status(404).send('<h1>Resource Not Found</h1>');
})

app.listen(5000,()=>{
    console.log('The server is listening on 5000')
})