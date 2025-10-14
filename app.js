var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminCampRouter = require('./routes/admin/camp');
var adminChildExpensesRouter = require('./routes/admin/child-expenses');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin/camp', adminCampRouter);
app.use('/admin/child-expenses', adminChildExpensesRouter);
app.use('/admin/leader', adminChildExpensesRouter);
app.use('/admin/leader-expenses', adminChildExpensesRouter);
app.use('/admin/resort-expenses', adminChildExpensesRouter);
app.use('/admin/camp-description', adminChildExpensesRouter);
app.use('/admin/employee', adminChildExpensesRouter);

module.exports = app;
