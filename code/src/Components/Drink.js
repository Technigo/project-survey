import React from 'react'

export const Drink = ({ drink, setDrink }) => {
    const handleDrinkChange = (event) => {
        setDrink(event.target.value);
    }

    return (
        <form>
            <div>
                <p>What drink would you like to celebrate with/drown your sorrows in?</p>
                <select
                    onChange={handleDrinkChange}
                    value={drink}>
                    <option value="">Select drink</option>
                    <option value="strong">Something strong, please!</option>
                    <option value="water">Water, let us stay hydrated!</option>
                    <option value="beer">It is beer a clock!</option>
                    <option value="coke">One coke a day keeps the doctor away!</option>
                    <option value="champange">Champange for everybody!</option>
                </select>
            </div>
        </form>
    )
}