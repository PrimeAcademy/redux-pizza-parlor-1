
import './PizzaItem.css'

function PizzaItem({pizzaItem}) {
    console.log('this is the pizzaItem', pizzaItem.image_path);
    return(
        <div className="pizz-card">
            <img src={pizzaItem.image_path} />
            <p>pizza info goes here!</p>
            <button>ADD/REMOVE</button>
        </div>
    )
}

export default PizzaItem;
