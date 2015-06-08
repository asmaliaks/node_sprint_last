// TODO: add support of HTML5 History API
require('url');
require('querystring');
var Router = function () {
	var self = this;

	if (typeof window != 'undefined') {
		window.addEventListener('hashchange', function () {
			self.onHashChange();
		});
	}

	this.listeners = {};
	this.hash = this.getHash();
};

Router.prototype.on = function (key, fn) {
	this.listeners[key] = fn;
};

Router.prototype.getHash = function () {
	var hash;

	if (typeof window != 'undefined' && window.location) { // Asume we are in browser
		hash = window.location.hash;
	} else {
		return '';
	}
	
	// Remove #
	if (hash && hash.substring(0, 1) == '#') {
		hash = hash.substring(1);
	}

	return hash;
};

Router.prototype.onHashChange = function (newHash) {
	newHash = newHash || this.getHash();
		
	// Call listener
	if (typeof this.listeners[newHash] == 'function') {
		this.listeners[newHash](newHash);
	}
};

Router.prototype.navigate = function (newHash) {
	if (typeof window != 'undefined' && window.location) {
		window.location.hash = '#' + newHash;
	} else {
		this.hash = newHash;
		this.onHashChange(newHash);
	}
};

Router.prototype.serverRoute = function (req) {
	var url = require('url');
	var urlParts = url.parse(req.url, true);
	var query = urlParts.query;
	if (query) {
		return query.path || '';
	} else {
		return '';
	}
}

module.exports = Router;