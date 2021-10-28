
import './PizzaItem.css'

function PizzaItem({pizzaItem}) {
    console.log('this is the pizzaItem', pizzaItem.image_path);
    return(
        <div className="pizza-card">
            <img src={pizzaItem.image_path} />
            <h4>{pizzaItem.name}</h4>
            <p>{pizzaItem.description}</p>
            <h5>${pizzaItem.price}</h5>
            <button>ADD/REMOVE</button>
        </div>
    )
}


export default PizzaItem;