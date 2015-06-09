var React = require('react'),
  mui = require('material-ui'),
  TextField = mui.TextField;

var Header = React.createClass({

  render: function() {
    return (

      <div className="header clearfix">

        <div className="registration-field align-right">
            <span  className="h_enter">Sign up</span>
             <span className="separator"></span>
             <span  className="h_enter">Sign in</span>
        </div>


        <div className="search-field">
          <TextField hintText="Search" />
          <span className="icon icon-search"></span>
        </div>


      </div>
    );
  }

});

module.exports = Header;