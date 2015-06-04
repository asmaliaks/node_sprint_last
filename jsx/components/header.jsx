var React = require('react'),
  mui = require('material-ui'),
  TextField = mui.TextField,
  FlatButton = mui.FlatButton;

var Header = React.createClass({

  render: function() {
    return (

      <div className="header clearfix">

        <div className="registration-field align-right">
          <FlatButton label="Login" />
          <span  className="h_enter">Login</span>
          <span className="separator"></span>
          <span className="separator"></span>
          <FlatButton label="Sign up" />
        </div>

        <h1 className="logo_title">Potato Search</h1>

        <div className="search-field">
          <TextField hintText="Search" />
          <span className="icon icon-search"></span>
        </div>


      </div>
    );
  }

});

module.exports = Header;