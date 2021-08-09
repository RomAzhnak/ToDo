import React from "react";
import './inputform.css'

function InputForm(props) {
    return (
        <form onSubmit={props.handleAddTodo}>
            <input className="new-todo" 
            onChange={props.handleChangeTodo} 
            type="text" 
            name="todo"
            placeholder="...todo"
            value={props.value}
            />
        </form>
    );
}

export default InputForm;