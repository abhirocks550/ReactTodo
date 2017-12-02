var React = require('react');

var Todo = React.createClass({
  render: function() {

    var {
      text,
      id
    } = this.props.todo;

    return (<div>
      {id}. {text}
    </div>);
  }
})

module.exports = Todo;
