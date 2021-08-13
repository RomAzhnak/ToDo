import React from "react";
import Todo from "./Todo";
import { useSelector } from 'react-redux';

const TodoList = () => {
        const todos = useSelector((state) => state.todos);

    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <Todo id={todo.id} title={todo.task} completed={todo.completed} />
            ))}
        </ul>
    );
}

export default TodoList;