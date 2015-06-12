/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react'),
    Header = require('./header.js'),
    Main = require('./main.js'),
    Footer = require('./footer.js');

var Page = React.createClass({displayName: "Page",

  render: function() {

    return (
      React.createElement("div", {id: "app"}, 
        React.createElement("div", {className: "example-page"}, 

          React.createElement("div", {className: "page"}, 
          React.createElement("div", {className: "page_inner"}, 
          React.createElement(Header, null), 
          React.createElement(Main, null)
          )
          )
        ), 
        React.createElement(Footer, null)
      )  
    );
  },

});

module.exports = Page;