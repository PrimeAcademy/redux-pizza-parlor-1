import "./Header.css";
import { useSelector } from "react-redux";

export default function Header({ pizzaList }) {
  // grabbing the checkoutReducer state
  const orderData = useSelector((store) => store.orderReducer);
  const cartPizzas = useSelector((store) => store.cartReducer);
  //   const pizzaMenu = useSelector((store) => store.menuReducer);
  // cartPizzas is an array [
  //     {
  //       id: "1",
  //       quantity: "1",

  //     },
  //     {
  //       id: "2",
  //       quantity: "1",
  //     },
  //   ]
  // first find out which pizzas these are in the menu
  let pizzas = pizzaList.filter((menuItem) => {
    for (let cartItem of cartPizzas) {
      console.log(menuItem.id);
      console.log(cartItem.id);
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

  // this is what reduce is doing:
  //   let total = 0;
  //   for (let pizza of pizzas){
  //       total += pizza.price
  //   }
  // grabbing the 'total' propery from the state (which is a single object containing order data)

  return (
    <header>
      <h1>Zoombini's Pizza Pass</h1>
      <h3>Total: ${total}</h3>
    </header>
  );
}
