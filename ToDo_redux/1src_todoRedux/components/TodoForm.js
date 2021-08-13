import React from "react";
import InputForm from "./InputForm";
import TodoList from "./TodoList";

const TodoForm = () => {
    return (
        <div>
            <InputForm 
                // handleAddTodo = {props.handleAddTodo}
                // handleChangeTodo = {props.handleChangeTodo}
                // value={props.value}
            />
            <TodoList
                // handleToggleComplete={props.handleToggleComplete}
                // handleDeleteTodoById={props.handleDeleteTodoById}
                // handleChangeTodo = {props.handleChangeTodo}
                // todos={props.todos}
                // reselect={props.reselect}
            />
        </div>
    );
}

export default TodoForm;