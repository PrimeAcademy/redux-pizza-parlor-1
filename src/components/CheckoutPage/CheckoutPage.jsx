import { useSelector, useDispatch } from "react-redux";
import CheckoutListItem from "../CheckoutListItem/CheckoutListItem.jsx";
import "./CheckoutPage.css";

export default function CheckoutPage() {
  // get the order data from the store
  const orderData = useSelector((store) => store.orderReducer);
  const cartPizzas = useSelector((store) => store.cartReducer);

  const dispatch = useDispatch();
  // const handleCheckout = () => {
  //     dispatch({type: ""})
  // }

  // get the pizza list from the menu;
  const pizzaList = useSelector((store) => store.menuReducer);

  let pizzas = pizzaList.filter((menuItem) => {
    for (let cartItem of cartPizzas) {
      if (menuItem.id === cartItem.id) {
        return true;
      }
    }
  });
  console.log(pizzas);

  let total = pizzas.reduce(
    (total, pizza) => Number(total) + Number(pizza.price),
    0
  );
  console.log(pizzaList);
  return (
    <>
      <h3>Step 3: Checkout</h3>
      <div className="address">
        <p>{orderData.name}</p>
        <p>{orderData.address}</p>
        <p>
          {orderData.city}, {orderData.zipCode}
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
      <h2>Total: ${total}</h2>
      <button>Checkout</button>
    </>
  );
}
