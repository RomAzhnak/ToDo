import React from "react";
import styles from './CSS/InputForm.module.css'

function InputForm(props) {
    return (
        <form onSubmit={props.handleAddTodo}>
            <input className={styles.new_todo}
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