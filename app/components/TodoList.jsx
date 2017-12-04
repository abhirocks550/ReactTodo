var React = require('react');
var {connect} = require('react-redux');

var TodoAPI = require('TodoAPI');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function() {
    var {
      todos,
      searchText,
      showCompleted
    } = this.props;

    var renderTodos = () => {
      if (todos.length === 0) {
        return (<p className="container__message">Nothing To Do</p>)
      }

      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
        return (<Todo key={todo.id} {...todo}/>)
      })
    }

    return (<div>
      {renderTodos()}
    </div>);
  }
})

module.exports = connect(
  (state)=>{
  return state;
})(TodoList);
