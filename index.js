const express = require('express');

const app =express();
const port = 8000;


//use express route
app.use('/',require('./routes'));






app.listen(port , function(err){
    if(err){
        console.log(`Error in the runing server :${port}`);
    }// interpolation in JavaScript is a process in which an expression is inserted or placed in the string
    console.log(`server runing in the port: ${port}`);
});