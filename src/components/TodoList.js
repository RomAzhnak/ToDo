import React from "react";
import Todo from "./Todo";

function TodoList(props) {
    let todos = props.todos;
    switch(props.reselect) {
        case 2: 
            todos = props.todos.filter(todo=> !todo.completed);
            break;
        case 3: 
            todos = props.todos.filter(todo=> todo.completed);
            break;
    }
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <Todo
                    handleToggleComplete={props.handleToggleComplete}
                    handleDeleteTodoById={props.handleDeleteTodoById}
                    handleClearTodos={props.handleClearTodos}
                    handleChangeTodo = {props.handleChangeTodo}
                    key={todo.id}
                    todo={todo}
                />
            ))}
        </ul>
    );
}

export default TodoList;