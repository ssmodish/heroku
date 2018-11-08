const express = require('express');

// npm i express helmet morgan
// yarn add express helmet morgan

const gatekeeper = require('../gatekeeper/gatekeeperMiddleware.js');
const configureMiddleware = require('../config/middleware.js');

const server = express();

// configure middleware
configureMiddleware(server);

// custom

// server.use(gatekeeper); // using middleware globally

// configure endpoints (route handlers are middleware!!)
server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' });
});

server.get('/secret', gatekeeper, (req, res) => {
  res.send(req.welcomeMessage);
});

server.get('/api/clients', (req, res) => {
  res.send('GET /clients');
});

server.get('/api/orders', (req, res) => {
  res.send('GET /orders');
});

module.exports = server;

// products, clients, orders

// we can organize our files by type, by feature or hybrid

// writing code? nope, creating value.

// what is code? is a communication device
// reveals intent to the next developer (might be you)
// it should be clear, reveal intent and have no surprises

// validateAndAddProduct(product) <<<< makes me nervous