//DEPENDENCIES
const express = require('express');
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

//CONFIGURATION
mongoose.connect('mongodb://localhost:27017/brandcrud', {
  useNewURLParser: true, 
  useUnifiedTopology: true, 
  useFindAndModify: false,
});
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});

//CONTROLLERS
//new brand user input
const usersController = require('./controllers/users.js');
const brandData = require('./models/brands.js');
const seedBrand = require('./models/seed.js');
app.use('/users', usersController);

//ROUTES
//Index Route
app.get('/', (req, res) =>{
    res.render('index.ejs')
})

//Seed Route
app.get('/seedBrand', (req, res) => {
  // seeds the data
  brandData.create(seedBrand, (err, createdData) => {
    // logs created users
    console.log(createdData);
    // redirects to index
    res.redirect('/');
    data: createdData;
  });
});

//LISTENERS + CONNECTIONS
app.listen(port, () =>{
    console.log('listening on part: ', port);
});
