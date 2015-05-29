var React = require('react');

var Button = React.createClass({displayName: "Button",
    render: function(){
        var props = this.props;
        return (
           React.createElement("input", {type: "button", onClick: function() {
               alert(props.name);
           }, value: this.props.name})
        );
    }
});

module.exports = Button;