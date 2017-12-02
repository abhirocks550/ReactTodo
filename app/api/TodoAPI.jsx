var $ = require('jQuery');

module.exports = {
  setTodos: function(todos) {
    debugger;
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {}

    if ($.isArray(todos)) {
      return todos;
    } else {
      return [];
    }

  },
  filterTodos: function(todos, showCompleted, searchText) {
    var filterdTodos = todos;

    // Filter by showCompleted
    filterdTodos = filterdTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // Filter by searchText
    filterdTodos = filterdTodos.filter((todo) => {
      var text = todo.text.toLowerCase();

      if (searchText === '' || text.indexOf(searchText.toLowerCase()) >= 0) {
        return true;
      } else {
        return false;
      }

    });

    // Sort todos with non completed first
    filterdTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    })
    return filterdTodos;
  }
};
