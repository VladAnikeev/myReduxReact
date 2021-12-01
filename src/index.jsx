import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from "redux";
import { rootReduce } from './redux/rootReduce';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

const store = createStore(rootReduce, compose(
    applyMiddleware(
        thunk
    ),
));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);