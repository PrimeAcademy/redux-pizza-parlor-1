export default function CheckoutListitem({ pizza, pizzaList }) {
  let pizzaDB;
  function findPizza() {
    pizzaDB = pizzaList.filter((menuItem) => menuItem.id === Number(pizza.id));
  }

  if (pizzaList.length > 0) {
    findPizza();
  }
  console.log(pizzaList);
  //   console.log(pizza.id);
  console.log(pizzaDB);
  //   const listItemName = pizzaDB[0].name;

  return (
    <tr>
      <td></td>
    </tr>
  );
}
