import * as types from '../constants/actionConstants';
// const ADD_TODO = 'ADD_TODO'
// const DELETE_TODO_BY_ID = 'DELETE_TODO_BY_ID'
// // export const EDIT_TODO = 'EDIT_TODO'
// const TOGGLE_TODO_COMPLETE = 'COMPLETE_TODO_COMPLETE'
// // export const COMPLETE_ALL_TODOS = 'COMPLETE_ALL_TODOS'
// const CLEAR_COMPLETED_TODOS = 'CLEAR_COMPLETED_TODOS'
// const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const addTodo = text => ({ type: types.ADD_TODO, text })
export const deleteTodoById = (id) => ({ type: types.DELETE_TODO_BY_ID, id })
export const toggleTodoComplete = (id) => ({ type: types.TOGGLE_TODO_COMPLETE, id })
export const clearCompletedTodos = () => ({ type: types.CLEAR_COMPLETED_TODOS })
export const setVisibilityFilter = (filter) => ({ type: types.SET_VISIBILITY_FILTER, filter})