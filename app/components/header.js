var React = require('react'),
  mui = require('material-ui'),
  Router = require('../router.js'),
  Signin = require('./signin.js'),
  TextField = mui.TextField;
var router = new Router();
var Header = React.createClass({displayName: "Header",
  mixins: [router.mixin],
  getInitialState: function() {
    return {liked: false};
  },

  render: function() {
    var text = this.state.liked ? "header clearfix login" : "header clearfix";
    return (

        React.createElement("div", {className: text},

            React.createElement("div", {className: "registration-field align-right"},
                React.createElement("span", {className: "h_enter",
                  onClick: function(){
                    router.navigate('signin');
                  }}, "Sign in"),
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