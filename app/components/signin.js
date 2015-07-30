/**
 * Created by asmalouski on 7/30/15.
 */
var React = require('react'),
    Router = require('../router.js'),
    mui = require('material-ui');

// Signin view
var Signin = React.createClass({displayName: "Signin",
    handleSubmit: function(e){
        e.preventDefault();

        var loginData = {};
        loginData.login = React.findDOMNode(this.refs.login).value.trim();
        loginData.pass = React.findDOMNode(this.refs.pass).value.trim();
        loginData.academyId = 1;

        var xhr = new XMLHttpRequest();

        var body = '{"login":"' +loginData.login+'",' +
            '"pass":"' + loginData.pass+'"}';


        xhr.open("POST", '/auth', true);
        //xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.send(body);
        xhr.onreadystatechange = function(){
            var response = xhr.responseText;
            console.log(response);
        };


    },
    render: function () {
        return React.createElement("main", null,
            //React.createElement("form",null,
                React.createElement("input", {type: "text", name:"login", ref: "login"},null),
                React.createElement("input", {type: "password", name: "pass", ref: "pass"},null),
                React.createElement("input", {type: "submit", onClick: this.handleSubmit}, null));
    }
});

module.exports = Signin;