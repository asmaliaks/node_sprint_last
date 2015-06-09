var React = require('react');
var Page = require('./components/page.js');
// App
var app = React.createClass({displayName: "app",
    render: function () {
        
        return (
        		React.createElement(Page, null)
        	);
    }
  
});

module.exports = app;
