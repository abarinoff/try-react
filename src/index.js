import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers, createStore} from 'redux';

import App from './App';
import {ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER} from './actions';
import {VisibilityFilters} from './actions';

import './index.css';

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
};

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
    console.log("todos reducer was called");
    switch(action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
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

function todoApp(state = {}, action) {
    console.log("todoApp reducer was called");
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action)
    }
}

let reducer = combineReducers({visibilityFilter, todos});
let store = createStore(reducer);

store.subscribe(() =>
    console.log(store.getState())
);

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
