var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
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
  handleAddTodo: function(text) {
    alert('New Todo : ' + text);
  },
  render: function() {
    var {
      todos
    } = this.state;

    return (<div>
      <TodoList todos={todos}/>
      <AddTodo addTodo={this.handleAddTodo}/>
    </div>);
  }
})

module.exports = TodoApp;
