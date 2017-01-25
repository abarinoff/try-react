import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {addTodo, setVisibilityFilter} from './actions';

import App from './App';
import './index.css';
import reducers from './reducers';

let store = createStore(reducers);

store.subscribe(() =>
    console.log(store.getState())
);

store.dispatch(addTodo("Test todo"));

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
