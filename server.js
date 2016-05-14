var express      = require('express');
var path         = require('path');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var yaml         = require('node-yaml-config');
var passport     = require('passport');
var Strategy     = require('passport-local').Strategy;

var app = express();
var config = yaml.load(path.join(__dirname, 'config/app.yaml'));

require('./extras/mongoose')(config.mongodb_uri);
require('./extras/passport')(passport, Strategy);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({secret: config.sessions_secret, resave: false, saveUninitialized: false}));
app.use(express.static(path.join(__dirname, 'dist')));

app.use(passport.initialize());
app.use(passport.session());

app.use('/users', require('./routes/users'));

app.listen(config.port, function() {
  console.log('Listening on port:', config.port);
});
