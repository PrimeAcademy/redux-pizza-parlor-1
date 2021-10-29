export default function CheckoutListitem({ pizza, pizzaList }) {
  // find the menu item that corresponds to the ordered pizza's id
  // uses the id from the order data and the id in the pizza db table
  let cartItem = pizzaList.filter(
    (menuItem) => menuItem.id === Number(pizza.id)
  );

  return (
    <tr>
      <td>{cartItem.map((menuItem) => menuItem.name)}</td>
      <td>{cartItem.map((menuItem) => menuItem.price)}</td>
    </tr>
  );
}
