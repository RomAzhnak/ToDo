import React from "react";
import TodoForm from "./components/TodoForm";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {clearCompletedTodos} from './redux/todoSlice';

const App = () => {
        const dispatch = useDispatch();
        const handleClearTodos = () => {
            dispatch(clearCompletedTodos())
        };
        const todos = useSelector((state) => state.todos);
        let countCompletedTasks = useSelector((state) => state.todos.filter(todo => todo.completed)).length;
        let countActiveTasks = useSelector((state) => state.todos.length) - countCompletedTasks;

        return (
            <section className="todoapp">
                <header className="header">
                    <h1 className="todoapp_h1">todos</h1>
                </header>
                <section className="main" >

                    <TodoForm/>

                </section>
                <footer className="footer" >
                    <span className="todo_count">
                        {countActiveTasks} Active
                    </span>
                    <ul className="filters">
                        <li className="filters_li">
                            <a href="#" className={todos.reselect === "all" ? "selected_filter_btn" : "filter_btn"} onClick="">All</a>
                        </li>
                        <li className="filters_li">
                            <a href="#" className={todos.reselect === "active" ? "selected_filter_btn" : "filter_btn"} onClick="">Active</a>
                        </li>
                        <li className="filters_li">
                            <a href="#" className={todos.reselect === "completed" ? "selected_filter_btn" : "filter_btn"} onClick="">Completed</a>
                        </li>
                    </ul>
                    <button className="button clear_completed" onClick={handleClearTodos}>Clear completed [{countCompletedTasks}]
                    </button>
                </footer>
            </section>
        );
    }


export default App
