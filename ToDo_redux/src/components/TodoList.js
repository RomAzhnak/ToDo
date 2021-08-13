import React, { useEffect } from "react";
import Todo from "./Todo";
import { useSelector } from 'react-redux';
// import { createSelector } from 'reselect';
import { visibleTodos } from "../selectors";

// const visibleTodos = createSelector(
//   (todos) => todos,
//   (_, reselect) => reselect,
//   (todos, visibilityFilter) => {
//     switch (visibilityFilter) {
//       case 'all':
//         return todos;
//       case 'completed':
//         return todos.filter(todo => todo.completed);
//       case 'active':
//         return todos.filter(todo => !todo.completed);
//       default:
//         return todos;
//     }
//   }
// )

const TodoList = () => {

  const matchingCount = useSelector((state) =>
    visibleTodos(state.todos.todos, state.todos.reselect)
  )

  // useEffect(() => {
  //   console.log('matchingCount', matchingCount)
  // }, [matchingCount])

  return (
    <ul className="todo-list">
      {matchingCount.map(todo => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.task}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
}

export default TodoList;