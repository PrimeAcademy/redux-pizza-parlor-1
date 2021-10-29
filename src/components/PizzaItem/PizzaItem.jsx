
import './PizzaItem.css'

function PizzaItem({pizzaItem}) {

    console.log('this is the pizzaItem', pizzaItem.image_path);
    return(
        <div className="pizza-card">
            <img src={pizzaItem.image_path} />
            <h4>{pizzaItem.name}</h4>
            <h5>${pizzaItem.price}</h5>
            <button>ADD/REMOVE</button>
            <p>{pizzaItem.description}</p>
        </div>
    )
}


export default PizzaItem;