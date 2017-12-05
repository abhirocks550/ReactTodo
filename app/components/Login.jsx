var React = require('react');
var redux =  require('react-redux');
var actions = require('actions');

var Login = React.createClass({
  onLogin() {
    var {dispatch} = this.props;
    dispatch(actions.startLoggin());
  },
  render: function() {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>Login with github account below</p>
              <button className="button" onClick={this.onLogin}>Login With Github</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports =  redux.connect()(Login);
