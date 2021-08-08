import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// "use strict";

function Todo(props) {
    return (
        <li className={props.todo.completed ? "completed" : ""}>
            <div className="view">
                <input className={props.todo.completed ? "toggle checked" : "toggle"}
                    type="checkbox" 
                    onClick={() => props.handleToggleComplete(props.todo.id)}
                    

                /> 
                {/* <input className="label"
                type="text"
                rows='1'
                name="todo1"
                value={props.todo.task}
                onChange={() => props.handleEditTodo(props.todo.id)} 
                /> */}
                <label className="label" onDoubleClick={() => {}}>{props.todo.task}</label>
                <button className="destroy" onClick={() => props.handleDeleteTodoOnId(props.todo.id, props.todo.completed)}></button>
            </div>
        </li>
    );
}

function TodoList(props) {
    let todos = props.todos;
    switch(props.reselect) {
        case 2: 
            todos = props.todos.filter(todo=> !todo.completed);
            break;
        case 3: 
            todos = props.todos.filter(todo=> todo.completed);
            break;
    }
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <Todo
                    handleToggleComplete={props.handleToggleComplete}
                    handleDeleteTodoOnId={props.handleDeleteTodoOnId}
                    handleClearTodos={props.handleClearTodos}
                    handleChangeTodo = {props.handleChangeTodo}
                    key={todo.id}
                    todo={todo}
                />
            ))}
        </ul>
    );
}

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

function TodoForm(props) {
    return (
        <div>
            <InputForm 
                handleAddTodo = {props.handleAddTodo}
                handleChangeTodo = {props.handleChangeTodo}
                value={props.value}
            />
            <TodoList
                handleToggleComplete={props.handleToggleComplete}
                handleDeleteTodoOnId={props.handleDeleteTodoOnId}
                handleChangeTodo = {props.handleChangeTodo}
                todos={props.todos}
                reselect={props.reselect}
            />
        </div>
    );
}

class App extends React.Component {
    // todos = [{task: '11111',
    //           id: 1528817077286,
    //           completed: false}]

    constructor() {
        super();
        this.state = {
            todos: [],
            todo: '',
            reselect: 1
        };
    }
    totalTasks = 0;
    completedTasks = 0;

    addTodo = e => {
        e.preventDefault();
        if (!this.state.todo) {return;}
        const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
        this.totalTasks+=1;
        this.setState({
            todos: [...this.state.todos, newTodo], 
            todo: ''
        });
    }

    changeTodo = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    deleteTodoOnId = (id, completed) => {
        if (completed) {this.completedTasks-=1}
        this.totalTasks-=1;
        let todos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({ todos });
    }

    toggleTodoComplete = id => {
        let todos = this.state.todos.slice();
        todos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
                (todo.completed) ? this.completedTasks+=1 : this.completedTasks-=1;
            }
            return todo;
        });
        this.setState({ todos });
    }

    setAllTodoComplete = () => {
        let todos = this.state.todos.slice();
        this.completedTasks = todos.length;
        todos = todos.map(todo => {
            todo.completed = true;
            return todo;
        });
        this.setState({ todos });
    }

    clearCompletedTodos = e => {
        let todos = this.state.todos.filter(todo => !todo.completed);
        this.totalTasks = todos.length;
        this.completedTasks = 0;
        this.setState({ todos });
    }

    viewTodos = (viewProperty) => {
        this.setState({ reselect: viewProperty })
    }

    render() {
        return (
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                </header>
                <section className="main" style={{display: "block"}}>
                <input id="toggle-all" type="checkbox" className="toggle-all" onChange={this.setAllTodoComplete}/>
                <label htmlFor="toggle-all">Mark all as complete</label>

                    <TodoForm
                        value={this.state.todo}
                        handleChangeTodo={this.changeTodo}
                        handleAddTodo={this.addTodo}
                        handleClearTodos={this.clearCompletedTodos}
                        handleToggleComplete={this.toggleTodoComplete}
                        handleDeleteTodoOnId ={this.deleteTodoOnId}
                        todos={this.state.todos}
                        reselect={this.state.reselect}
                    />



                </section>
                 <footer className="footer" style={{display: "block"}}>
                    <span className="todo-count">
                         <strong>{this.totalTasks - this.completedTasks}</strong> Active
                    </span>
                    <ul className="filters">
                        <li>
                            <a href="#" className={this.state.reselect===1 ? "selected" : ""} onClick={()=>this.viewTodos(1)}>All</a>
                        </li>
                        <li>
                            <a href="#" className={this.state.reselect===2 ? "selected" : ""} onClick={()=>this.viewTodos(2)}>Active</a>
                        </li>
                        <li>
                            <a href="#" className={this.state.reselect===3 ? "selected" : ""} onClick={()=>this.viewTodos(3)}>Completed</a>
                        </li>
                    </ul>
                    <button className="clear-completed" onClick={this.clearCompletedTodos}>Clear completed [<span>{this.completedTasks}</span>]
                    </button>
                </footer>   
            </section>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
