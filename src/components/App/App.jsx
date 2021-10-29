import React, { useEffect, useState } from "react";
import axios from "axios";

import { Route, HashRouter as Router, Link } from "react-router-dom";

import "./App.css";
import PizzaForm from "../PizzaForm/PizzaForm";
import PizzaMenu from "../PizzaMenu/PizzaMenu.jsx";

import Header from "../Header/Header.jsx";
import CheckoutPage from "../CheckoutPage/CheckoutPage.jsx";
import { useDispatch } from "react-redux";

function App() {
  const [pizzaList, getPizzaList] = useState([]);

  function getPizzas() {
    axios({
      method: `GET`,
      url: `/api/pizza`,
    })
      .then((response) => {
        console.log(`GET /api/pizza response`, response.data);
        getPizzaList(response.data);
      })
      .catch((error) => {
        console.log(`GET /api/pizza ERROR`, error);
      });
  }

  useEffect(() => {
    getPizzas();
  }, []);
  return (
    <Router>
      <div className="App">
        <Header pizzaList={pizzaList} />

        <Route path="/" exact>
          <PizzaMenu pizzaList={pizzaList} />
          <nav>
            <button>
              <Link to="/form">NEXT</Link>
            </button>
          </nav>
        </Route>

        <Route path="/form">
          <PizzaForm />
        </Route>

        <Route path="/checkout">
          <CheckoutPage pizzaList={pizzaList} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
