const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const next = require('next');
const PORT = 6969 || process.env.PORT;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const mongoose = require('mongoose');
const Router = require('./src');
const handle = app.getRequestHandler();


app.prepare().then(() => {
    const server = express();
    server.use(compression());
    server.use(bodyParser.json({ extend: true }));
    server.use(bodyParser.urlencoded({ extend: true }));

    //listen
    server.get('/', (req, res) => {
        return app.render(req, res, '/');
    });

    server.get('/sanpham/:id', (req, res) => {
        return app.render(req, res, '/sanpham', { id: req.params.id });
    });

    server.get('/giohang', (req, res) => {
        return app.render(req, res, '/giohang');
    });

    server.get('/dathangonline', (req, res) => {
        return app.render(req, res, '/dathangonline');
    });

    server.get('/danhmucsanpham', (req, res) => {
        return app.render(req, res, '/danhmucsanpham');
    });
    
    server.get('/cuahangonline/:pageid', (req, res) => {
        return app.render(req, res, '/cuahangonline', { pageid: req.params.pageid });
    });

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(PORT, err => {
        if (err) throw err;
        console.log(`Server listening on ${PORT}`);
    });
});
