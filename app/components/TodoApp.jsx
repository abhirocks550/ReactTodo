var React = require('react');
var redux = require('react-redux');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var actions = require('actions');

var TodoApp = React.createClass({
  onLogout(e) {
    e.preventDefault();

    var {dispatch} = this.props;
    dispatch(actions.startLogout());
  },
  render: function() {
    return (
      <div>

        <div className="page-actions">
          <a href="#" onClick={this.onLogout}>Logout</a>
        </div>

        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
    </div>);
  }
});

module.exports = redux.connect()(TodoApp);
