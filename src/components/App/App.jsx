
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

import PizzaMenu from '../PizzaMenu/PizzaMenu.jsx'
import Header from "../Header/Header.jsx";


function App() {

  const [pizzaList, getPizzaList] = useState([]);

  function getPizzas() {
    axios({
      method: `GET`,
      url: `/api/pizza`
    })
      .then(response => {
        console.log(`GET /api/pizza response`, response.data);
        getPizzaList(response.data)
      })
      .catch(error => {
        console.log(`GET /api/pizza ERROR`, error);
      })
  };



  useEffect(() => {
    getPizzas();
  }, [])



  return (
    <div className='App'>
      <Header />

      <PizzaMenu pizzaList={pizzaList} />

    </div>
  );
}

export default App;
