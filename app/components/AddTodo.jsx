var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var AddTodo = React.createClass({
  handleOnSubmit: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      // this.props.addTodo(todoText);
      dispatch(actions.addTodo(todoText))
    }
  },
  render: function() {

    return (<div className="container__footer">
      <form onSubmit={this.handleOnSubmit}>
        <input type="text" ref="todoText"/>
        <button className="button expanded">Submit</button>
      </form>
    </div>);
  }
})

module.exports = connect()(AddTodo);
