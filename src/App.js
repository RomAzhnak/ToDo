// import logo from './logo.svg';
import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';

class App extends React.Component {
    // todos = [{task: '11111',
    //           id: 1528817077286,
    //           completed: false}]

    constructor() {
        super();
        this.state = {
            todos: [],
            todo: '',
            reselect: 1,
        };
    }

    addTodo = e => {
        e.preventDefault();
        if (!this.state.todo) { return; }
        const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
        this.setState({
            todos: [...this.state.todos, newTodo],
            todo: ''
        });
    }

    changeTodo = e => {
        this.setState({ todo: e.target.value });
    }

    deleteTodoById = (id) => {
        let todos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({ todos });
    }

    toggleTodoComplete = id => {
        let todos = this.state.todos.slice();
        todos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({ todos });
    }

    setAllTodoComplete = () => {
        let todos = this.state.todos.slice();
        todos = todos.map(todo => {
            todo.completed = true;
            return todo;
        });
        this.setState({ todos });
    }

    clearCompletedTodos = e => {
        let todos = this.state.todos.filter(todo => !todo.completed);
        this.setState({ todos });
    }

    viewTodos = (viewProperty) => {
        this.setState({ reselect: viewProperty });
    }

    render() {
        let countCompletedTasks = this.state.todos.filter(todo => todo.completed).length;
        let countActiveTasks = this.state.todos.length - countCompletedTasks;

        return (
            <section className="todoapp">
                <header className="header">
                    <h1 className="todoapp_h1">todos</h1>
                </header>
                <section className="main" >

                    <TodoForm
                        value={this.state.todo}
                        handleChangeTodo={this.changeTodo}
                        handleAddTodo={this.addTodo}
                        handleClearTodos={this.clearCompletedTodos}
                        handleToggleComplete={this.toggleTodoComplete}
                        handleDeleteTodoById={this.deleteTodoById}
                        todos={this.state.todos}
                        reselect={this.state.reselect}
                    />

                </section>
                <footer className="footer" >
                    <span className="todo_count">
                        {countActiveTasks} Active
                    </span>
                    <ul className="filters">
                        <li className="filters_li">
                            <a href="#" className={this.state.reselect === 1 ? "selected aa" : "aa"} onClick={() => this.viewTodos(1)}>All</a>
                        </li>
                        <li className="filters_li">
                            <a href="#" className={this.state.reselect === 2 ? "selected aa" : "aa"} onClick={() => this.viewTodos(2)}>Active</a>
                        </li>
                        <li className="filters_li">
                            <a href="#" className={this.state.reselect === 3 ? "selected aa" : "aa"} onClick={() => this.viewTodos(3)}>Completed</a>
                        </li>
                    </ul>
                    <button className="button clear_completed" onClick={this.clearCompletedTodos}>Clear completed [{countCompletedTasks}]
                    </button>
                </footer>
            </section>
        );
    }
}

export default App;
