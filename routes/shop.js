const path = require('path');
const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');

router.get('/', (req, res, next) => {
    console.log('In another middleware');
    res.sendFile(path.join(__dirname, '../', 'views', 'Home.html'))
});

router.get('/menu', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'menu.html'))
})

module.exports = router;