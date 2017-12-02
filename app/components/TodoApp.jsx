var React = require('react');
const uuidv1 = require('uuid/v1');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuidv1(),
          text: 'Learn Redux',
          completed: false
        }, {
          id: uuidv1(),
          text: 'Create Authentication in React',
          completed: false
        }, {
          id: uuidv1(),
          text: 'Learn MongoDB',
          completed: true
        }
      ]
    }
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
          completed: false
        }
      ]
    });
  },
  handleToggle: function(id) {
    var updatedTodos = this.state.todos.map(function(todo) {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })

    this.setState({todos: updatedTodos})
  },
  render: function() {
    var {
      todos
    } = this.state;

    return (<div>
      <TodoSearch onSearch={this.handleSearch}/>
      <TodoList todos={todos} onToggle={this.handleToggle}/>
      <AddTodo addTodo={this.handleAddTodo}/>
    </div>);
  }
});

module.exports = TodoApp;
