import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const todoSlice = createSlice({
	name: 'todos',
	initialState: [
        // {task: 'task', id: new Date(), completed: false},
    ],
	reducers: {
		addTodo: (state, action) => {
			const todo = {
                task: action.payload.task,
				// id: new Date(),
                id: nanoid(),
				completed: false,
			};
			state.push(todo);
            // return [...state, todo];
		},
		toggleTodoComplete: (state, action) => {
			return state.map(todo => (todo.id === action.payload.id) ? { ...todo, completed: !todo.completed } : todo);
		},
		deleteTodoById: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload.id);
		},
        clearCompletedTodos: (state, action) => {
            return state.filter(todo => !todo.completed);
        },
		visibilityFilter: (state = 'all', action) => {
			return action.payload.filter;			
		}
	},
});

export const { addTodo, toggleTodoComplete, deleteTodoById, clearCompletedTodos } = todoSlice.actions;
export default todoSlice.reducer;
// export const { visibilityFilter } = todoSlice.actions;
// export default todoSlice.reducer
