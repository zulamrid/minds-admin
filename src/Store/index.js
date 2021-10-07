import {compose, createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

import MainReducer from './Main/main.reducer';

const reducer = combineReducers({
    Main: MainReducer,
})

const store = createStore(reducer, {},  applyMiddleware(thunk));

export default store;