var React = require('react');

var AddTodo = React.createClass({
  handleOnSubmit: function(e) {
    e.preventDefault();

    var todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.addTodo(todoText);
    }
  },
  render: function() {

    return (<div>
      <form onSubmit={this.handleOnSubmit}>
        <input type="text" ref="todoText"/>
        <button className="button expanded">Submit</button>
      </form>
    </div>);
  }
})

module.exports = AddTodo;
