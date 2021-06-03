import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from "./redux/redusers";
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {detectSpamMiddleware} from "./redux/middlewares/spam";

const enhancer = composeWithDevTools(
    applyMiddleware(
        thunk,
        detectSpamMiddleware
    ),
);

const store = createStore(
    rootReducer,
    enhancer
);

const app = (
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>
)

ReactDOM.render(
    app,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
