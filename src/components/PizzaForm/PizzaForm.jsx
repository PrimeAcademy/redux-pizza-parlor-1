import { useState } from 'react';
import { useDispatch } from 'react';

function PizzaForm() {

    // const [name, setName] = useState('')
    // const [address, setAddress] = useState('')
    // const [city, setCity] = useState('')
    // const [zipCode, setZipCode] = useState('')
    // const [pickUp, setPickUp] = useState(false)

    const dispatch = useDispatch();

    const [orderToAdd, setOrderToAdd] = useState({ name: '', address: '', city: '', zipCode: '', pickUp: '', delivery: '' })


    const handleNameChange = (event) => {
        console.log('clicked')
        setOrderToAdd({
            ...orderToAdd,
            name: event.target.value,
        })
    }

    const handleAddressChange = (event) => {
        console.log('clicked')
        setOrderToAdd({
            ...orderToAdd,
            address: event.target.value,
        })
    }

    const handleCityChange = (event) => {
        console.log('clicked')
        setOrderToAdd({
            ...orderToAdd,
            city: event.target.value,
        })
    }

    const handleZipCodeChange = (event) => {
        console.log('clicked')
        setOrderToAdd({
            ...orderToAdd,
            zipCode: event.target.value,
        })
    }

    const handlePickUpChange = (event) => {
        console.log('clicked')
        setOrderToAdd({
            ...orderToAdd,
            pickUp: event.target.value,
        })
    }
    const handleDeliveryChange = (event) => {
        console.log('clicked')
        setOrderToAdd({
            ...orderToAdd,
            delivery: event.target.value,
        })
    }

    const addCustomer = (event) => {
        event.preventDefault();


        dispatch({
            type: "ADD_ORDER_INFO",
            payload: orderToAdd

        })
        setOrderToAdd('');
    }


    return (
        <form onSubmit={(event) => addCustomer(event)}>
            <input onChange={handleNameChange}
                type="text"
                value={orderToAdd.name}
                placeholder="name"
            />

            <input onChange={handleAddressChange}
                type="text"
                value={orderToAdd.address}
                placeholder="address"
            />
            <input onChange={handleCityChange}
                type="text"
                value={orderToAdd.city}
                placeholder="city"
            />
            <input onChange={handleZipCodeChange}
                type="text"
                value={orderToAdd.zipCode}
                placeholder="zip Code"
            />
            <div>
                <input onChange={handlePickUpChange}
                    type="radio"
                    value={orderToAdd.pickUp}
                    placeholder="pick up"
                />
                <input onChange={handleDeliveryChange}
                    type="radio"
                    value={orderToAdd.delivery}
                    placeholder="delivery"
                />
            </div>
            <button type="submit">Next</button>
        </form>
    )
}