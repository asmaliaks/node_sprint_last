/**
 * Created by asmalouski on 7/30/15.
 */
var React = require('react'),
    Router = require('../router.js'),
    mui = require('material-ui');
    TextField = mui.TextField;
    FlatButton = mui.FlatButton;

// Signin view
var Signin = React.createClass({displayName: "Signin",
    getInitialState: function() {
        return {error: false};
    },
    handleSubmit: function(e){
        e.preventDefault();

        var loginData = {};
        var opa = React.findDOMNode(this.refs.login).value;
        loginData.login = React.findDOMNode(this.refs.login).value.trim();
        loginData.pass = React.findDOMNode(this.refs.pass).value.trim();

        var xhr = new XMLHttpRequest();

        var body = '{"login":"' +loginData.login+'",' +
            '"pass":"' + loginData.pass+'"}';


        xhr.open("POST", '/auth', true);
        //xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.send(body);
        xhr.onreadystatechange = function(){
            var response = xhr.responseText;console.log(response);
            //if(!response){
            //    console.log('invalid credentials');
            //}else{
            //    console.log('ok gugal');
            //}
        };

    },
    render: function () {
        var errorMsg = this.state.error ? true : "Invalid credentials";
        return React.createElement("main", null,
            React.createElement("form",null,
                React.createElement("input", {type: "text", name:"login", ref: "login"},null),
                React.createElement("input", {type: "password", name: "pass", ref: "pass"},null),
                React.createElement("input", {type: "submit", onClick: this.handleSubmit}, null)));
    }
});

module.exports = Signin;