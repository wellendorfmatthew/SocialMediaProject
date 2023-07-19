var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const hbs = require('hbs');

var indexRouter = require('./app_server/routes/index');
//var usersRouter = require('./app_server/routes/users');
var registerRouter = require('./app_server/routes/register');
var homeRouter = require('./app_server/routes/home');
var messagesRouter = require('./app_server/routes/messages');
var profileRouter = require('./app_server/routes/profile');
var searchRouter = require('./app_server/routes/search');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
    hbs.registerPartials(path.join(__dirname, 'app_server', 'views/partials'))
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Set the loginpage as the root URL
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'loginpage.html'))
});

app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/register', registerRouter);
app.use('/messages', messagesRouter);
app.use('/profile', profileRouter);
app.use('/home', homeRouter);
app.use('/search', searchRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
