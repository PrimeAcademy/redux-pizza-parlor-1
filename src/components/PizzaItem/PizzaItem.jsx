
import { useDispatch } from 'react-redux';
import './PizzaItem.css'


function PizzaItem({ pizzaItem }) {

    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch({
            type: 'ADD_PIZZA',
            payload: pizzaItem
        })
    }


    console.log('this is the pizzaItem', pizzaItem.image_path);
    return (
        <div className="pizza-card">
            <img src={pizzaItem.image_path} />
            <h4>{pizzaItem.name}</h4>
            <h5>${pizzaItem.price}</h5>
            <button onClick={handleAdd} >ADD/REMOVE</button>
            <p>{pizzaItem.description}</p>
        </div>
    )
}


export default PizzaItem;