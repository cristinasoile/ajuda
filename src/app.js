// src/app.js

const express = require('express');

const User = require('./controllers/user.controller');

const app = express();

app.use(express.json());

app.get('/company', companyController.getAll);

module.exports = app;
