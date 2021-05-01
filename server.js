//DEPENDENCIES
const express = require('expres');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const port = 3000;

//CONFIGURATION
mongoose.connect('mongodb://localhost:27017/projectcrud',
{useNewURLParser: true});

//Connection Error/Success
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));
db.on( 'open' , ()=>{
  console.log('Connection made!');
});

const brandData = require('./models/brands.js');

//MIDDLEWARE
//body parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//static files
app.use(express.static('public'))

//CONTROLLERS

//GET INDEX and other routes

//LISTENERS + CONNECTIONS
app.listen(port, () =>{
    console.log('listening on part: ', port);
});