var React = require('react');

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

React.render(
  React.createElement('h1', null, 'Hello, world!'),
  document.getElementById('example')
);