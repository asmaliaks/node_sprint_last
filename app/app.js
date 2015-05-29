var React = require('react');
var Button = require('./component.js');

// App
var app = React.createClass({
    render: function () {
        var state = this.props;
        var element= React.createElement(Button, {name: state.name || 'John'});
        return element;
    }
  
});

module.exports = app;
