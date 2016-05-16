var express = require ('express');

var thisrouter = require('./thisrouter');
var db = require('./db');
var theheck = require('./theheck');

var app = express();

app.use('/', thisrouter);
app.use('/api', db);
app.use('/hecka', theheck);

app.listen(8000, function () {
	console.log('heyyeah listening on port 8000');
};
