const uuidv1 = require('uuid/v1');
const moment = require('moment');

export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
      break;
    default:
      return state;
  };
};

export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOOGLE_SHOW_COMPLETED':
      return !state;
      break;
    default:
      return state;
  };
};

export var todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuidv1(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
      break;
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          var nextCompleted = !todo.completed;

          return {
              ...todo,
              completed: nextCompleted,
              completedAt: nextCompleted ? moment().unix() : undefined
          }
        } else {
          return todo;
        }
      })
    default:
      return state;
  };
};
