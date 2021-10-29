import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function PizzaForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [orderToAdd, setOrderToAdd] = useState({
    name: "",
    address: "",
    city: "",
    zipCode: "",
    type: "",
  });

  const handleNameChange = (event) => {
    console.log("clicked");
    setOrderToAdd({
      ...orderToAdd,
      name: event.target.value,
    });
  };

  const handleAddressChange = (event) => {
    console.log("clicked");
    setOrderToAdd({
      ...orderToAdd,
      address: event.target.value,
    });
  };

  const handleCityChange = (event) => {
    console.log("clicked");
    setOrderToAdd({
      ...orderToAdd,
      city: event.target.value,
    });
  };

  const handleZipCodeChange = (event) => {
    console.log("clicked");
    setOrderToAdd({
      ...orderToAdd,
      zipCode: event.target.value,
    });
  };

  const handlePickUpChange = (event) => {
    console.log(event.target.value);
    setOrderToAdd({
      ...orderToAdd,
      type: event.target.value,
    });
  };

  const pizzas = useSelector((store) => store.cartReducer);

  const addCustomer = (event) => {
    event.preventDefault();

    dispatch({
      type: "SUBMIT_DETAILS",
      payload: orderToAdd,
    });
    dispatch({ type: "CREATE_ORDER", payload: pizzas });
    setOrderToAdd({
      name: "",
      address: "",
      city: "",
      zipCode: "",
      type: "",
    });
    history.push("/checkout");
  };

  return (
    <form onSubmit={(event) => addCustomer(event)}>
      <input
        onChange={handleNameChange}
        type="text"
        value={orderToAdd.name}
        placeholder="name"
      />

      <input
        onChange={handleAddressChange}
        type="text"
        value={orderToAdd.address}
        placeholder="address"
      />
      <input
        onChange={handleCityChange}
        type="text"
        value={orderToAdd.city}
        placeholder="city"
      />
      <input
        onChange={handleZipCodeChange}
        type="text"
        value={orderToAdd.zipCode}
        placeholder="zip Code"
      />
      <div>
        <input
          onChange={handlePickUpChange}
          type="radio"
          value="pickup"
          name="type"
          id="pickup"
        />
        <label htmlFor="pickup">Pick Up</label>
        <input
          onChange={handlePickUpChange}
          type="radio"
          value="delivery"
          id="delivery"
          name="type"
        />
        <label htmlFor="delivery">Delivery</label>
      </div>
      <button type="submit">Next</button>
    </form>
  );
}

export default PizzaForm;
