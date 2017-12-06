var redux = require('redux');
var {searchTextReducer, showCompletedReducer, todosReducer, authReducer} = require('reducers');
import thunk from "redux-thunk"

export var configure = () => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer,
    auth: authReducer
  });

  var store = redux.createStore(reducer,redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
