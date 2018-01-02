const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const PORT = process.env.PORT || 6969;
const axios = require('axios');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './public');
app.use(express.static('public'));
app.use(compression());
app.use(bodyParser.json({ extend: true }));
app.use(bodyParser.urlencoded({ extend: true }));

app.listen(PORT,() => {
    console.log("Server listen on port 6969");
})

app.get('/',(req, res) => {
    res.render('home');
})

app.get('/category',(req, res) => {
    res.render('home')
})

app.get('/productDetail',(req, res) => {
    res.render('home')
})

app.get('/shop/:pageid',(req, res) => {
    res.render('home')
})



