import {combineReducers} from 'redux';
import {ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters} from './actions';

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
    console.log("visibilityFilter reducer was called");
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return action.payload.filter;
        default:
            return state;
    }
}

function todos(state = [], action) {
    console.log("todos reducer was called: ", state, action);
    switch(action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state,
                    {
                        text: action.payload.text,
                        completed: false
                    }
                ]
            });
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.map((todo, index) => {
                    if (index === action.payload.index) {
                        return Object.assign({}, todo, {
                            completed: !todo.completed
                        })
                    }
                    return todo;
                })
            });
        default:
            return state;
    }
}

const reducers = combineReducers({visibilityFilter, todos});

export default reducers;