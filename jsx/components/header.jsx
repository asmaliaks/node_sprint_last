var React = require('react'),
  mui = require('material-ui'),
  TextField = mui.TextField;

var Header = React.createClass({

  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },



  render: function() {
    var text = this.state.liked ? "header clearfix login" : "header clearfix";
    return (

      <div className={text}>

        <div className="registration-field align-right">
            <span  className="h_enter" onClick={this.handleClick}>Sign in</span>
             <span className="separator"></span>
             <span  className="h_enter">Sign up</span>
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