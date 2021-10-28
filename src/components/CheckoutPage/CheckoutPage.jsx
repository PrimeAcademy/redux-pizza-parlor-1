import { useSelector, useDispatch } from "react-redux";
import CheckoutListItem from "../CheckoutListItem/CheckoutListItem.jsx";
import "./CheckoutPage.css";

export default function CheckoutPage({ pizzaList }) {
  // get the order data from the store
  const orderData = useSelector((store) => store.orderReducer);
  const dispatch = useDispatch();
  // const handleCheckout = () => {
  //     dispatch({type: ""})
  // }
  return (
    <>
      <h3>Step 3: Checkout</h3>
      <div className="address">
        <p>{orderData.customer_name}</p>
        <p>{orderData.street_address}</p>
        <p>
          {orderData.city}, {orderData.zip}
        </p>
      </div>
      <div className="type">
        <p>For {orderData.type}</p>
      </div>

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
              pizzaList={pizzaList}
              pizza={pizza}
            />
          ))}
        </tbody>
      </table>
      <h2>Total: ${orderData.total}</h2>
      <button>Checkout</button>
    </>
  );
}
