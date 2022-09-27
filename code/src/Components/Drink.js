import React from 'react'

export const Drink = ({ drink, setDrink }) => {
    const handleDrinkChange = (event) => {
        setDrink(event.target.value);
    }

    return (
        <div>
            <p>What is your favourite drink?</p>
            <input
                type="text"
                onChange={handleDrinkChange}
                value={drink}
            />
        </div>
    )
}