// dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose'); // our newest addition to the dependency family 

// configure the app to use body parser and morgan
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));
// static file support with public folder
app.use(express.static('public'));