var React = require('react'),
  mui = require('material-ui'),
  TextField = mui.TextField;

var Header = React.createClass({displayName: "Header",

  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },



  render: function() {
    var text = this.state.liked ? "header clearfix login" : "header clearfix";
    return (

      React.createElement("div", {className: text}, 

        React.createElement("div", {className: "registration-field align-right"}, 
            React.createElement("span", {className: "h_enter", onClick: this.handleClick}, "Sign in"), 
             React.createElement("span", {className: "separator"}), 
             React.createElement("span", {className: "h_enter"}, "Sign up")
        ), 


        React.createElement("div", {className: "search-field"}, 
          React.createElement(TextField, {hintText: "Search"}), 
          React.createElement("span", {className: "icon icon-search"})
        )


      )
    );
  }

});

module.exports = Header;