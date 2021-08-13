import React from "react";
import Todo from "./Todo";
import { useSelector } from 'react-redux';

// function TodoList(props) {
    // let todos = props.todos;
    // switch(props.reselect) {
    //     case "active": 
    //         todos = props.todos.filter(todo=> !todo.completed);
    //         break;
    //     case "completed": 
    //         todos = props.todos.filter(todo=> todo.completed);
    //         break;
    // }

const TodoList = () => {
        const todos = useSelector((state) => state.todos);

    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <Todo id={todo.id} title={todo.title} completed={todo.completed} 

                    // handleToggleComplete={props.handleToggleComplete}
                    // handleDeleteTodoById={props.handleDeleteTodoById}
                    // handleClearTodos={props.handleClearTodos}
                    // handleChangeTodo = {props.handleChangeTodo}
                    // key={todo.id}
                    // todo={todo}
                />
            ))}
        </ul>
    );
}

export default TodoList;