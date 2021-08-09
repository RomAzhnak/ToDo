import React from "react";
import InputForm from "./Input Form";
import TodoList from "./TodoList";

function TodoForm(props) {
    return (
        <div>
            <InputForm 
                handleAddTodo = {props.handleAddTodo}
                handleChangeTodo = {props.handleChangeTodo}
                value={props.value}
            />
            <TodoList
                handleToggleComplete={props.handleToggleComplete}
                handleDeleteTodoById={props.handleDeleteTodoById}
                handleChangeTodo = {props.handleChangeTodo}
                todos={props.todos}
                reselect={props.reselect}
            />
        </div>
    );
}

export default TodoForm;