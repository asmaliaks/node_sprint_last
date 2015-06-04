var React = require('react');

var Footer = React.createClass({displayName: "Footer",

  render: function() {
    return (

      React.createElement("div", {className: "footer"}, 
        React.createElement("h1", null, "Potato Footer")
      )
    );
  }

});

module.exports = Footer;