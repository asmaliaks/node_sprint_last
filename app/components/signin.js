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
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.send(body);

        xhr.onloadend = function(){
            if(xhr.status == 200){
                var response = xhr.responseText;
                if(response != '[]'){
                    response = JSON.parse(response);
                    response = response[0];
                    console.log(response);
                }else{
                    console.log("no users found");
                }

            }

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