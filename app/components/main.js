var React = require('react');
var LoginForm = require('./LoginForm.js');

var Main = React.createClass({displayName: "Main",

  render: function() {
    return (

      React.createElement("div", {className: "main"}, 
      	React.createElement(LoginForm, null)
      )
    );
  }

});

module.exports = Main;