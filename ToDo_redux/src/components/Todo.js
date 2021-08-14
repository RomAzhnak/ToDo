import React from "react";
import { useDispatch } from 'react-redux';
import styles from './CSS/Todo.module.css'
import { toggleTodoComplete, deleteTodoById } from '../redux/todoSlice';

const Todo = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const handleToggleTodo = () => {
    dispatch(toggleTodoComplete({ id: id }));
  };
  const handleDeleteTodoById = () => {
    dispatch(deleteTodoById({ id: id }));
  }

  return (
    <li className={styles.todo_list_li}>
      <div>
        <input className={`${styles.toggle} 
                ${completed ? styles.checked : ''}`
        }
          type="checkbox"
          onClick={handleToggleTodo}
        />
        <label className={completed ?
          styles.label_completed :
          styles.label
        }
        >
          {title}
        </label>
        <button className={styles.destroy}
          onClick={handleDeleteTodoById}
        >
        </button>
      </div>
    </li>
  );
}

export default Todo;