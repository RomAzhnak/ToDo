"use strict";

function Todo(props) {
    return (
        <li>
            <div className="view">
                <input className={props.todo.completed ? "toggle checked" : "toggle"}
                    type="checkbox" 
                    onClick={() => props.handleToggleComplete(props.todo.id)}
                />
                <label style={props.todo.completed ? { textDecoration: 'line-through' } : null}>{props.todo.task}</label>
                <button className="destroy" onClick={() => props.handleDeleteTodoOnId(props.todo.id, props.todo.completed)}>x</button>
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
            reselect: -1
        };
    }
    totalTasks = 0;
    completedTasks = 0;

    addTodo = e => {
        e.preventDefault();
        const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
        if (!newTodo.task) {return;}
        this.totalTasks+=1;
        this.setState({
            todos: [...this.state.todos, newTodo],
            todo: ''
        });
    }

    changeTodo = event => this.setState({ [event.target.name]: event.target.value });

    deleteTodoOnId = (id, completed) => {
        if (completed) {this.completedTasks-=1}
        this.totalTasks-=1;
        let todos = this.state.todos.filter(todo => todo.id != id);
        this.setState({ todos });
    }

    toggleTodoComplete = id => {
        let todos = this.state.todos.slice();
        todos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
                (todo.completed) ? this.completedTasks+=1 : this.completedTasks-=1;
                return todo;
            } else {
                return todo;
            }
        });
        this.setState({ todos });
    }

    clearCompletedTodos = e => {
        let todos = this.state.todos.filter(todo => !todo.completed);
        this.totalTasks = todos.length;
        this.completedTasks = 0;
        this.setState({ todos });
    }

    viewActiveTodos = e => {
        this.setState({reselect: 2})
    }

    viewAllTodos = e => {
        this.setState({reselect: 1})
    }

    viewCompletedTodos = e => {
        this.setState({reselect: 3})

    }

    render() {
        return (
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                </header>
                <div className="main" style={{display: "block"}}>
                    
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

                <input type="checkbox" className="toggle-all" />
                <label className="toggle-all">Mark all as complete</label>

                </div>
                 <footer className="footer" style={{display: "block"}}>
                    <span className="todo-count">
                         <strong>{this.totalTasks - this.completedTasks}</strong> Active
                    </span>
                    <ul className="filters">
                        <li>
                            <a href="#"  onClick={this.viewAllTodos}>All</a>
                        </li>
                        <li>
                            <a href="#" className="" onClick={this.viewActiveTodos}>Active</a>
                        </li>
                        <li>
                            <a href="#" className="" onClick={this.viewCompletedTodos}>Completed</a>
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
