import { useSelector } from "react-redux";
import CheckoutListItem from "../CheckoutListItem/CheckoutListItem.jsx";

export default function CheckoutPage({ pizzaList }) {
  const orderData = useSelector((store) => store.orderReducer);
  //   const getPizza = pizzaList.filter((pizza) => pizza.id === orderdata);

  return (
    <>
      <h3>Step 3: Checkout</h3>
      <p>{orderData.customer_name}</p>
      <p>{orderData.street_address}</p>
      <p>{orderData.city}</p>
      <p>{orderData.zip}</p>
      <p>{orderData.type}</p>
      <table>
        <thead>
          <tr>
            <th>Pizza</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {orderData.pizzas.map((pizza) => (
            <CheckoutListItem
              key={pizza.id}
              pizza={pizza}
              pizzaList={pizzaList}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
