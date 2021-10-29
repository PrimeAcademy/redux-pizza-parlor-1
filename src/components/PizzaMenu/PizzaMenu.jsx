import PizzaItem from "../PizzaItem/PizzaItem.jsx";
import "./PizzaMenu.css";
import { useSelector } from 'react-redux';

function PizzaMenu() {

    const pizzaList = useSelector(store => store.menuReducer);

    return (
        <div>
            <div className="menu-container">
                {pizzaList.map((pizzaItem) => (
                    <PizzaItem key={pizzaItem.id} pizzaItem={pizzaItem} />
                ))}
            </div>
            <h5>Pizza is great. Eat more pizza!</h5>
        </div>
    );
}

export default PizzaMenu;
