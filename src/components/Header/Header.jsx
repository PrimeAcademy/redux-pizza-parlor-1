import "./Header.css";
import { useSelector } from "react-redux";

export default function Header() {
  // grabbing the checkoutReducer state
  const orderData = useSelector((store) => store.orderReducer);

  // grabbing the 'total' propery from the state (which is a single object containing order data)
  console.log(orderData.total);

  return (
    <header>
      <h1>Zoombini's Pizza Pass</h1>
      <h3>Total: ${orderData.total}</h3>
    </header>
  );
}
