var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var express = require('express');
var app = express();

var MatiereController = require('./matiere/MatiereController');
app.use('/matieres', MatiereController);

module.exports = app;
