var React = require('react');
var LoginForm = require('./LoginForm.js');

var Main = React.createClass({

  render: function() {
    return (

      <div className="main">
      	<LoginForm/>
      </div>
    );
  }

});

module.exports = Main;