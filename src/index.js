import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

//reducer for customer interactions
const cartReducer = (state = [], action) => {
  //if-else statements for different actions
  //action for adding menu item
  if (action.type === "ADD_PIZZA") {
    action.payload.quantity = 1;
    return [...state, action.payload];
    //action for clearing cart
  } else if (action.type === "CLEAR_CHECKOUT") {
    return [];
  }

  return state; //default return in the case nothing is triggered
};
const example = {
  customer_name: "",
  street_address: "",
  city: "",
  zip: "",
  //   total: "27.98",
  type: "",
  pizzas: [],
};
//FORM REDUCERS
const orderReducer = (state = example, action) => {
  //action for adding customers address information
  if (action.type === "SUBMIT_DETAILS") {
    return { ...state, ...action.payload };
  } else if (action.type === "CREATE_ORDER") {
    return { ...state, pizzas: action.payload }; // totalReducer
  } else if (action.type === "UPDATE_TOTAL") {
    return { ...state, total: action.payload };
  } else if (action.type === "CLEAR_CHECKOUT") {
    return example;
  }
  return state;
};

//reducer for admin actions
const adminReducer = (state = [], action) => {
  if (action.type === "ADD_ORDER") {
    return [...state, action.payload];
  }
  return state;
};

// Menu / PizzaList reducer
const menuReducer = (state = [], action) => {
  if (action.type === "ADD_MENU") {
    return action.payload;
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    cartReducer,
    orderReducer,
    adminReducer,
    menuReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
