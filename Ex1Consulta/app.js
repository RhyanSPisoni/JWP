const express = require('express');
const app = express();

const routeVM = require('./router/consulta.js');

app.use('/', routeVM);

module.exports = app