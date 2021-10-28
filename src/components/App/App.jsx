import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
// import { useDispatch } from 'react-redux';
import PizzaMenu from '../PizzaMenu/PizzaMenu.jsx'


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
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>

      <PizzaMenu pizzaList={pizzaList} />

      {/* <img src='images/pizza_photo.png' /> */}
      

    </div>
  );
}

export default App;
