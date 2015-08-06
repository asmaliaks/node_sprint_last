var restify = require('restify');
var React = require('react');
// var myservice = require('./service.js');
var state = {};
var app = React.createFactory(require('../app/app.js'));
var server = restify.createServer();
//var Router = require('./router.js');
var MongoClient = require('mongodb').MongoClient
	, assert = require('assert');

server.use(restify.bodyParser());
server.post('/auth', function(req, res) {
	var jsonBody = JSON.parse(req.body);
	var findUsers = function(db, login, pass, callback) {
		// Get the documents collection
		var collection = db.collection('users');

		// Find some documents
		var results = collection.find({login: login, pass: pass}).toArray(function(err, users) {
			assert.equal(err, null);
			callback(users);
		});

	};
//// Connection URL
	var url = 'mongodb://localhost:27017/sprint2';
// Use connect method to connect to the Server
	MongoClient.connect(url, function(err, db) {
		assert.equal(null, err);
		//var collection = db.collection('users');
		findUsers(db, jsonBody.login, jsonBody.pass,
			function(users) {
				res.send(users);
				db.close();
		});
	});




});
// Prepare landing page
server.get('/', function (req, res, next) {	
	
	// Get data
	// var data = myservice.test();
	
	// Set state
	// state.name = data.name;
	
	// Prepare content
	var content = React.renderToString(new app(state));
	var body = '<!DOCTYPE html>\
				<html lang="">\
				<head>\
				<meta content="width=device-width" name="viewport">\
				<link rel="stylesheet" type="text/css" href="css/main.css">\
				</head>\
					<body>\
						<div id="app">' + content + '</div>\
						<script>var APP_PROPS = ' + JSON.stringify(state) + ';</script>\
						<script src="client.js"></script>\
					</body>\
				</html>';
	
	// Send response	
	res.writeHead(200, {
	    'Content-Length': Buffer.byteLength(body),
	    'Content-Type': 'text/html; charset=utf-8'
	});
	res.write(body);
	res.end();
});

// Serve static (js, css)
server.get('/.*', restify.serveStatic({
	directory: __dirname + '/../public'
}));

// Run server
server.listen(8080, function () {
	console.log('%s listening at %s', server.name, server.url);
});