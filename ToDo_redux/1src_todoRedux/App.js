// // import logo from './logo.svg';
// import React from 'react';
// import './App.css';
// import TodoForm from './components/TodoForm';


// import { Provider } from 'react-redux'
// import { createStore } from "redux"
// import reducer from './reducers'


// const initialState = {
//     todos: [{
//         task: '',
//         id: 0,
//         completed: false
//     }],
//     visibilityFilter: 'SHOW_ALL'
// };

// function todos(state = [], action) {
//     switch (action.type) {

//         case "ADD_TODO": return [...state, { task: action.text, id: Date.now(), completed: false }]

//         case "DELETE_TODO_BY_ID": return state.filter(todo => todo.id !== action.id)

//         case "TOGGLE_TODO_COMPLETE": return state.map(todo => (todo.id === action.id) ? { ...todo, completed: !todo.completed } : todo)

//         case "CLEAR_COMPLETED_TODOS": return state.filter(todo => !todo.completed)

//         default: return state

//         // case changeTodo = (e) => {
//         //     this.setState({ todo: e.target.value });
//         // }

//         // viewTodos = (viewProperty) => {
//         //     this.setState({ reselect: viewProperty });
//         // }

//     }
// }

// function visibilityFilter(state = 'SHOW_ALL', action) {
//     if (action.type === 'SET_VISIBILITY_FILTER') {
//         return action.filter
//       } else {
//         return state
//       }
// }

// function todoApp(state = initialState, action) {
//     return {
//       todos: todos(state.todos, action),
//       visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//     }
//   }

  

// export default todos;
// export default viewTodos;
// export default todoApp;

// ------------------------------------------------------------------------------
import React from "react";
import TodoForm from "./components/TodoForm";
import { useSelector } from 'react-redux';

const App = () => {


        let countCompletedTasks = useSelector((state) => state.todos.filter(todo => todo.completed)).length;
        let countActiveTasks = useSelector((state) => state.todos.length) - countCompletedTasks;

        return (
            <section className="todoapp">
                <header className="header">
                    <h1 className="todoapp_h1">todos</h1>
                </header>
                <section className="main" >

                    <TodoForm
                        // value={this.state.todo}
                        // handleChangeTodo={this.changeTodo}
                        // handleAddTodo={this.addTodo}
                        // handleClearTodos={this.clearCompletedTodos}
                        // handleToggleComplete={this.toggleTodoComplete}
                        // handleDeleteTodoById={this.deleteTodoById}
                        // todos={this.state.todos}
                        // reselect={this.state.reselect}
                    />

                </section>
                {/* <footer className="footer" >
                    <span className="todo_count">
                        {countActiveTasks} Active
                    </span>
                    <ul className="filters">
                        <li className="filters_li">
                            <a href="#" className={this.state.reselect === "all" ? "selected_filter_btn" : "filter_btn"} onClick={() => this.viewTodos("all")}>All</a>
                        </li>
                        <li className="filters_li">
                            <a href="#" className={this.state.reselect === "active" ? "selected_filter_btn" : "filter_btn"} onClick={() => this.viewTodos("active")}>Active</a>
                        </li>
                        <li className="filters_li">
                            <a href="#" className={this.state.reselect === "completed" ? "selected_filter_btn" : "filter_btn"} onClick={() => this.viewTodos("completed")}>Completed</a>
                        </li>
                    </ul>
                    <button className="button clear_completed" onClick={this.clearCompletedTodos}>Clear completed [{countCompletedTasks}]
                    </button>
                </footer> */}
            </section>
        );
    }


export default App
