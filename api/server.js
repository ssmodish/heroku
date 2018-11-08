const express = require('express');

// npm i express helmet morgan
// yarn add express helmet morgan

const gatekeeper = require('../gatekeeper/gatekeeperMiddleware.js');
const productRouter = require('../products/productRouter.js');
const configureMiddleware = require('../config/middleware.js');

const server = express();

  // configure middleware
configureMiddleware(server);

// server.use(gatekeeper); // using middleware globally

// configure endpoints (route handlers are middleware!!)
server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' });
});

server.get('/secret', gatekeeper, (req, res) => {
  res.send(req.welcomeMessage);
});

server.use('/api/products', productRouter);

server.get('/api/clients', (req, res) => {
  res.send('GET /clients');
});

server.get('/api/orders', (req, res) => {
  res.send('GET /orders');
});

module.exports = server;