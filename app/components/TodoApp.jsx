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
          text: 'Learn Redux'
        }, {
          id: uuidv1(),
          text: 'Create Authentication in React'
        }, {
          id: uuidv1(),
          text: 'Learn MongoDB'
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
          text: text
        }
      ]
    });
  },
  render: function() {
    var {
      todos
    } = this.state;

    return (<div>
      <TodoSearch onSearch={this.handleSearch}/>
      <TodoList todos={todos}/>
      <AddTodo addTodo={this.handleAddTodo}/>
    </div>);
  }
});

module.exports = TodoApp;
