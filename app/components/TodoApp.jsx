var React = require('react');
const uuidv1 = require('uuid/v1');
const moment = require('moment');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {showCompleted: false, searchText: '', todos: TodoAPI.getTodos()}
  },
  componentDidUpdate: function() {
    TodoAPI.setTodos(this.state.todos);
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({showCompleted: showCompleted, searchText: searchText.toLowerCase()});
  },
  handleAddTodo: function(text) {
    this.setState({
      todos: [
        ...this.state.todos, {
          id: uuidv1(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },
  handleToggle: function(id) {
    var updatedTodos = this.state.todos.map(function(todo) {

      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed
          ? moment().unix()
          : undefined;
      }
      return todo;
    })

    this.setState({todos: updatedTodos})
  },
  render: function() {
    var {
      todos,
      showCompleted,
      searchText
    } = this.state;

    var filterdTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (<div>
      <h1 className="page-title">Todo App</h1>

      <div className="row">
        <div className="column small-centered small-11 medium-6 large-5">
          <div className="container">
            <TodoSearch onSearch={this.handleSearch}/>
            <TodoList todos={filterdTodos} onToggle={this.handleToggle}/>
            <AddTodo addTodo={this.handleAddTodo}/>
          </div>
        </div>
      </div>
    </div>);
  }
});

module.exports = TodoApp;
