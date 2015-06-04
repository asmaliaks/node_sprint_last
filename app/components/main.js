var React = require('react');

var Main = React.createClass({displayName: "Main",

  render: function() {
    return (

      React.createElement("div", {className: "main"}, 
        React.createElement("h1", null, "Potato Main")
      )
    );
  }

});

module.exports = Main;