const path = require('path');
const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');

//admin/add-product   get-request
router.get('/add-product', (req, res, next) => {
    console.log('In another middleware');
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
})


//admin/add-product  post-request
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.send('<h1>POST REQUEST')
})


module.exports = router;