/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react'),
    Header = require('./header.js'),
    Main = require('./main.js'),
    Footer = require('./footer.js');

var Page = React.createClass({

  render: function() {

    return (
      <div className="example-page">

        <div className="page_inner">
        <Header />
        <Main />
        </div>
        </div>
        <Footer />


    );
  },

});

module.exports = Page;