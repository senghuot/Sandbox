var express = require('express');
var app = express();
var routes = require('./routes');

// Comments
app.set('view engine', 'ejs');
app.locals.pagetitle = 'Awesome Sandbox';

app.get('/', routes.index);
app.get('/about', routes.about);

app.get('*', function(req, res) {
	res.send('Bad Route.');
});

var server = app.listen(3000, function(){
	console.log('listening on port 3000');
});
