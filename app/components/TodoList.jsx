var React = require('react');

var Todo = require('Todo');

var TodoList = React.createClass({
  render: function() {
    var {
      todos,
      onToggle
    } = this.props;

    var renderTodos = () => {
      if (todos.length === 0) {
        return (<p className="container__message">Nothing To Do</p>)
      }

      return todos.map((todo) => {
        return (<Todo key={todo.id} todo={todo} onToggle={onToggle}/>)
      })
    }

    return (<div>
      {renderTodos()}
    </div>);
  }
})

module.exports = TodoList;
