var React = require('react');

// About view
var About = React.createClass({displayName: "About", 
	render: function () {
    	return React.createElement("main", null,	"About");
  	}
});

// Header component
var Header = React.createClass({displayName: "Header",
  render: function () {
	var comp = this;
    return (
		React.createElement("header", null, 
			React.createElement("a", {
					onClick: function () {
						comp.props.onChange('home');
					},
					className: comp.props.currentView != 'about' ? 'active' : ''	
				}, "Home"),
			React.createElement("a", {
					onClick: function () {
						comp.props.onChange('about');						
					},					
					className: comp.props.currentView == 'about' ? 'active' : ''	
					
				}, "About")
		)
	);
  }
});

// Home view
var Home = React.createClass({displayName: "Home",
  render: function () {
    return React.createElement("main", null,	"Home");
  }
});


// Application
var App = React.createClass({displayName: "App",

	render: function() {
		if (this.state.currentView == 'about') {
        	return React.createElement("div", null, this.about());
		} else {
			return React.createElement("div", null, this.home());
		}
    },
	
	handleChange: function(value) {
    	this.setState({currentView: value});
    },
	
	getInitialState: function () {
		return { currentView: 'home' };
    },
	
	home: function () {
		return (
      		React.createElement("div", null, 
        		React.createElement(Header, {onChange: this.handleChange, currentView: this.state.currentView}), 
        		React.createElement(Home)
			)
		);
	}, 
	
	about: function () {
		return (
	      React.createElement("div", null, 
	      	React.createElement(Header, {onChange: this.handleChange, currentView: this.state.currentView}), 
	      	React.createElement(About)
			)
		);
	}
});

React.render(
  React.createElement(App),
	document.body
);