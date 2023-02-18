const express = require('express');

const app =express();
const port = 8000;
const expressLayout = require('express-ejs-layouts');
app.use(express.static('./assets'));

app.use(expressLayout);
//extract style and script page
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


//use express route
app.use('/',require('./routes'));

// set views engine
app.set('view engine','ejs');
app.set('views','./views');






app.listen(port , function(err){
    if(err){
        console.log(`Error in the runing server :${port}`);
    }// interpolation in JavaScript is a process in which an expression is inserted or placed in the string
    console.log(`server runing in the port: ${port}`);
});