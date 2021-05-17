var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var finale = require('finale-rest')

var models = require('./models');
const userModel = require('./models').User;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Initialize finale
finale.initialize({
    app: app,
    sequelize: models
  });

// Create REST resource
var userResource = finale.resource({
    model: userModel,
    endpoints: ['/users', '/users/:id'],
    // excludeAttributes: ['Role'],
    readOnlyAttributes: ['Role']
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
