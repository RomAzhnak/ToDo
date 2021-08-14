import React, { useEffect } from "react";
import Todo from "./Todo";
import { useSelector } from 'react-redux';
// import { createSelector } from 'reselect';
import { visibleTodos } from "../selectors";

const TodoList = () => {

  const filteringTodos = useSelector((state) =>
    visibleTodos(state.todos.todos, state.todos.reselect)
  )

  // useEffect(() => {
  //   console.log('filteringTodos', filteringTodos)
  // }, [filteringTodos])

  return (
    <ul className="todo-list">
      {filteringTodos.map(todo => (
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