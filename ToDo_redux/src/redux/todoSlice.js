import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
//todos: {task: 'task', id: new Date().getTime(), completed: false},

const initialState = {
	reselect: 'all',
	todos: [],
};

export const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const todo = {
				task: action.payload.task,
				id: new Date().getTime(),
				// id: nanoid(),
				completed: false,
			};
			state.todos.push(todo);
		},
		toggleTodoComplete: (state, action) => {
			state.todos = state.todos.map
				(
					todo => (todo.id === action.payload.id) ?
						{ ...todo, completed: !todo.completed } :
						todo
				);
		},
		deleteTodoById: (state, action) => {
			state.todos = state.todos.filter
				(
					todo => todo.id !== action.payload.id
				);
		},
		clearCompletedTodos: (state, action) => {
			state.todos = state.todos.filter
				(
					todo => !todo.completed
				);
		},
		visibilityFilter: (state, action) => {
			state.reselect = action.payload;
		}
	},
});

export const {
	addTodo,
	toggleTodoComplete,
	deleteTodoById,
	clearCompletedTodos,
	visibilityFilter,
} = todoSlice.actions;

export default todoSlice.reducer;
