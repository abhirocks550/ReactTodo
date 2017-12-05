var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var firebase = require('firebase');

var {
  Route,
  Router,
  IndexRoute,
  hashHistory
} = require('react-router');

var TodoApp = require('TodoApp');
var Login = require('Login');

var requireLogin = ((nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/');
  }
  next();
});

var redirectIfLoggedin = ((nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/todos');
  }
  next();
});

module.exports = (
  <Router history={hashHistory}>
    <Route path = "/" >
      <Route path = "todos" component = {TodoApp} onEnter = {requireLogin}/>
      <IndexRoute component = {Login} onEnter = {redirectIfLoggedin}/>
    </Route>
  </Router>
);
