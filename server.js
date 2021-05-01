//DEPENDENCIES
const express = require('expres');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const port = 3000;

//MIDDLEWARE
//body parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//static files
app.use(express.static('public'))

//CONTROLLERS

//GET INDEX

//LISTENERS + CONNECTIONS
app.listen(port, () =>{
    console.log('listening on part: ', port);
});