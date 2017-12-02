var React = require('react');

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
          id: 1,
          text: 'Learn Redux'
        }, {
          id: 2,
          text: 'Create Authentication in React'
        }, {
          id: 3,
          text: 'Learn MongoDB'
        }
      ]
    }
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({showCompleted: showCompleted, searchText: searchText.toLowerCase()});
  },
  handleAddTodo: function(text) {
    alert('New Todo : ' + text);
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
})

module.exports = TodoApp;
