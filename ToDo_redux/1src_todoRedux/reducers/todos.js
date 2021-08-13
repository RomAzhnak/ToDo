

// todos = [{task: '11111',
//           id: 1528817077286,
//           completed: false}]

// constructor() {
//     super();
//     this.state = {
//         todos: [],
//         todo: '',
//         reselect: "all",
//     };
// }

import * as types from '../constants/actionConstants'

const initialState = [{
    task: '',
    id: 0,
    completed: false
}];

export default function todos(state = initialState, action) {
    switch (action.type) {

        case types.ADD_TODO: return [...state, { task: action.text, id: Date.now(), completed: false }]

        case types.DELETE_TODO_BY_ID: return state.filter(todo => todo.id !== action.id)

        case types.TOGGLE_TODO_COMPLETE: return state.map(todo => (todo.id === action.id) ? { ...todo, completed: !todo.completed } : todo)

        case types.CLEAR_COMPLETED_TODOS: return state.filter(todo => !todo.completed)

        default: return state

        // case changeTodo = (e) => {
        //     this.setState({ todo: e.target.value });
        // }

        // viewTodos = (viewProperty) => {
        //     this.setState({ reselect: viewProperty });
        // }


    }
}

// function viewTodos(state = "SHOW_ALL", action) {
//     if (action.type === 'SET_VISIBILITY_FILTER') {
//         return action.filter
//       } else {
//         return state
//       }
// }
