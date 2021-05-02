//Dependencies
const express = require('express');
const router = express.Router();
const brandData = require('../models/brands.js');

//Create a new brand
router.get('/new', (req, res) => {
    console.log("testing users get route")
    res.render('users/new.ejs')
})

//POST - new brand
// router.post('/', async (req, res)=>{
//     brandData.create(req.body, (error, createdLog) => {
//         console.log(req.body)
//         console.log("testing users post route " + createdLog)
//         res.redirect('/')
//     })
// })

//export
module.exports = router;