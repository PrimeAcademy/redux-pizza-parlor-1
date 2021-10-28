import "./Header.css";
import { useSelector } from "react-redux";

export default function Header() {
  // grabbing the checkoutReducer state
  //   const cartData = useSelector((store) => store.checkoutReducer());

  // grabbing the 'total' propery from the state (which is a single object containing order data)
  //   const totalCartPrice = cartData.total.toFixed(2);

  return (
    <header>
      <h1>Zoombini's Pizza Pass</h1>
      <h3>Total: $0.00</h3>
    </header>
  );
}
