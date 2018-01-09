const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const PORT = process.env.PORT || 6969;
const axios = require('axios');

const app = express();

app.use(compression());
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.use(bodyParser.json({ extend: true }));
app.use(bodyParser.urlencoded({ extend: true }));

app.listen(PORT,() => {
    console.log("Server listen on port 6969");
})

app.get('/',(req, res) => {
    res.render('home');
})

app.get('/category/:pageid',(req, res) => {
    res.render('home')
})

app.get('/product/:pageid',(req, res) => {
    res.render('home')
})

app.get('/shop/:pageid',(req, res) => {
    res.render('home')
})

app.get('/cart',(req, res) => {
    res.render('home')
})

app.get('/checkout',(req, res) => {
    res.render('home')
})

app.get('/search',(req, res) => {
    res.render('home')
})