var restify = require('restify');
var React = require('react');
var myservice = require('./service.js');
var state = {};
var app = React.createFactory(require('../app/app.js'));
var server = restify.createServer();

// Rest service
server.get('/test', function (req, res, next) {
	res.send(200, JSON.stringify(myservice.test()));
	next();
});

// Prepare landing page
server.get('/', function (req, res, next) {	
	
	// Get data
	var data = myservice.test();
	
	// Set state
	state.name = data.name;
	
	// Prepare content
	var content = React.renderToString(new app(state));
	var body = '<!DOCTYPE html>\
				<html lang="">\
					<body>\
						<div id="app">' + content + '</div>\
						<script>var APP_PROPS = {name: "' + state.name+ '"};</script>\
						<script src="client.js"></script>\
					</body>\
				</html>';
	
	// Send response
	res.writeHead({
		'Content-Type': 'text/html'
	});
	res.write(body);
	res.end();
});

// Serve static (js, css)
server.get('/.*', restify.serveStatic({
	directory: __dirname + '/../public'
}));

// Run server
server.listen(80, function () {
	console.log('%s listening at %s', server.name, server.url);
});