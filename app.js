const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const path = require('path');
const hbs = require('express-handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.set('view engine', 'hbs');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const loginRoutes = require('./routes/login')
let port = 3001;


app.use('/', loginRoutes);
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use('/', (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.htnl'))
})

app.listen(port, () => {
    console.log('Listening on port 3001');
})