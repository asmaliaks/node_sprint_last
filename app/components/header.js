var React = require('react'),
  mui = require('material-ui'),
  TextField = mui.TextField;

var Header = React.createClass({displayName: "Header",

  render: function() {
    return (

      React.createElement("div", {className: "header clearfix"}, 

        React.createElement("div", {className: "registration-field align-right"}, 
            React.createElement("span", {className: "h_enter"}, "Login"), 
             React.createElement("span", {className: "separator"}), 
             React.createElement("span", {className: "h_enter"}, "Sign up")
        ), 

        React.createElement("h1", {className: "logo_title"}, "Potato Search"), 

        React.createElement("div", {className: "search-field"}, 
          React.createElement(TextField, {hintText: "Search"}), 
          React.createElement("span", {className: "icon icon-search"})
        )


      )
    );
  }

});

module.exports = Header;