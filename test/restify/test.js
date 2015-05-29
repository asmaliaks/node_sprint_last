var restify = require('restify');
var myservice = require('./service.js');

function respond(req, res, next) {
	console.log('respond', myservice.test());
  res.send('hello ' + req.params.name + '.' + myservice.test());
  next();
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});