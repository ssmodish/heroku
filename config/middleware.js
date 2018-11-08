const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const productRouter = require('../products/productRouter.js');

module.exports = server => {
  // ORDER MATTERS! they will execute top to bottom
  server.use(express.json());
  server.use(helmet());
  server.use(morgan("short"));

  server.use('/api/products', productRouter);
};
