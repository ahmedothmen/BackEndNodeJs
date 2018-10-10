var express = require('express');
var app = express();

var MatiereController = require('./MatiereController');
app.use('/matieres', MatiereController);

module.exports = app;