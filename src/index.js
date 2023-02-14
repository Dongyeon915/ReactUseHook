import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import UseReducer from "./useReducer/UseReducer";
import UseReducerExamlple from "./useReducer/UseReducerExamlple";
import UseHook from "./dongHook/UseHookExample"
import UseHookExample from "./dongHook/UseHookExample3"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UseHookExample/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
