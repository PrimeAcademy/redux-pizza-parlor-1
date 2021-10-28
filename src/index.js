import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';


//reducer for customer interactions
const cartReducer = (state = [], action) => {
    //if-else statements for different actions 
    //action for adding menu item 
    if(action.type === 'ADD_PIZZA'){
        return {...state, action.payload};
    //action for clearing cart
    }else if(action.type === 'CLEAR_CHECKOUT'){ 
        return [];
    }

    return state; //default return in the case nothing is triggered 
}
//FORM REDUCERS
const orderReducer = (state = {}, action) => {
    //action for adding customers address information
    if(action.type === 'SUBMIT_DETAILS'){
        return action.payload;
    }
    if(action.type === 'CREATE_ORDER'){
        return {...state, action.payload};
    }
    if(action.type === 'ADD_ORDER_INFO'){
    return {};
}

//reducer for admin actions
const adminReducer = (state = [], action) => {
    if(action.type === 'ADD_ORDER'){
        return [...state, action.payload];
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        cartReducer,
        orderReducer,
        adminReducer
    }),
    applyMiddleware(logger),
);






ReactDOM.render(
    <Provider store={storeInstance}>
    <App />
    </Provider>, 
    document.getElementById('root'));
