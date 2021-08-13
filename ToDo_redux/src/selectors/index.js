import { createSelector } from 'reselect'


// const getVisibilityFilter = (state) => state.todos.reselect;
// const getTodos = (state) => state.todos;

export const visibleTodos = createSelector(
  (todos) => todos,
  (_, reselect) => reselect,
  (todos, visibilityFilter) => {
    switch (visibilityFilter) {
      case 'all':
        return todos;
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'active':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }
)