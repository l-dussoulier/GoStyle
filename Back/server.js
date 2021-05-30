// set up ======================================================================
var express      = require('express');
var session      = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var morgan       = require('morgan');
var app          = express();
var port         = process.env.PORT || 8080;
var flash        = require('connect-flash');

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.use(session({
	secret: 'vidyapathaisalwaysrunning',
	resave: true,
	saveUninitialized: true
 } ));
app.use(flash());

// database sequelize
const db = require('./app/sequelize');

// sync database
db.sequelize.sync();

// reset datatable
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// routes ======================================================================
require('./app/routes/authentification_routes.js')(app);
require('./app/routes/coupons_routes.js')(app);

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
