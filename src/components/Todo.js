import React from "react";
import styles from './CSS/Todo.module.css'

function Todo(props) {
    return (
        <li className={styles.todo_list_li}>
            <div>
                <input className={`${styles.toggle} ${props.todo.completed ? styles.checked : ''}`}
                    type="checkbox" 
                    onClick={() => props.handleToggleComplete(props.todo.id)}
                /> 
                <label className={props.todo.completed ? styles.label_completed : styles.label}>{props.todo.task}</label>
                <button className={styles.destroy} onClick={() => props.handleDeleteTodoById(props.todo.id, props.todo.completed)}></button>
            </div>
        </li>
    );
}
export default Todo;