var React = require('react'),
    Router = require('../router.js'),
    Signin = require('./signin.js');
var router = new Router();

var Main = React.createClass({displayName: "Main",
  mixins: [router.mixin],
  getInitialState: function () {
    var self = this,  initialView = 'main';

    // Routes

    router.on('home', function(hash) {
      self.setState({currentView: hash});
    });
    router.on('signin', function(hash) {
      self.setState({currentView: hash});
    });

    // Get initail view
    if (router.path) { // Browser hash has higher priority over server
      initialView = router.path;
    } else 	if (this.props.currentView) { // If defined by on server or starting parameters
      initialView = this.props.currentView;
    }

    return { currentView: initialView};

  },
  handleChange: function(value) {
    this.setState({currentView: value});
  },
  render: function() {
     if(this.state.currentView == 'main'){
      return React.createElement("div", null, this.main());
    }else if(this.state.currentView == 'signin'){
      return React.createElement("div", null, this.signin());
    }
  },
  main: function () {
    return (
        React.createElement("div", {className: "main"},null)
    );
  },
  signin: function(){
    return(
        //React.createElement("div", {onChange: this.handleChange, currentView: this.state.currentView},
          React.createElement(Signin, null));
  }

});

module.exports = Main;