
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var port = 3000;

var app = express();

//serve static content for the app from the "public" directory in the application direc
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: true}));

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//import routes and give server access to them 

var routes = require('./controllers/burgers_controller.js'); 

app.use('/', routes);

app.listen(port);

