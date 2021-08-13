import React, { useState } from "react";
import styles from './CSS/InputForm.module.css'
import { useDispatch } from 'react-redux';
import { addTodo } from "../actions/index";


const InputForm = () => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const onSubmit = (event) => {
        // event.preventDefault();
        if (value) {
            dispatch(addTodo(value));
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input className={styles.new_todo}
                onChange={(event) => setValue(event.target.value)}
                type="text"
                // name="todo"
                placeholder="...todo"
                value={value}
            />
        </form>
    );
}

export default InputForm;