import React from "react";
// import styles from './Todo.module.css'

// function Todo(props) {
//     return (
//         <li className={props.todo.completed ? styles.completed : ""}>
//             <div >
//                 <input className={`${styles.toggle} ${props.todo.completed ? styles.toogle_checked : ''}`}
//                     type="checkbox" 
//                     onClick={() => props.handleToggleComplete(props.todo.id)}
//                 /> 
//                 <label className={styles.label} onDoubleClick={() => {}}>{props.todo.task}</label>
//                 <button className="destroy" onClick={() => props.handleDeleteTodoById(props.todo.id, props.todo.completed)}></button>
//             </div>
//         </li>
//     );
// }

function Todo(props) {
    return (
        <li className={props.todo.completed ? "completed" : ""}>
            <div className="view">
                <input className={props.todo.completed ? "toggle checked" : "toggle"}
                    type="checkbox" 
                    onClick={() => props.handleToggleComplete(props.todo.id)}
                /> 
                <label className="label" >{props.todo.task}</label>
                <button className="destroy" onClick={() => props.handleDeleteTodoOnId(props.todo.id, props.todo.completed)}></button>
            </div>
        </li>
    );
}

export default Todo;