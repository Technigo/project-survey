import React from 'react'

const DrinksInput = ({ drinks, setDrinks }) => {

    const handleDrinksChange = drinksValue => {
        drinks.includes(drinksValue)
            ? setDrinks(drinks.filter(item => item !== drinksValue))
            : setDrinks([...drinks, drinksValue])
    }

    return (
        <div className="checkbox-container">
            <label className="checkbox-label" htmlFor="water">water</label>
            <input
                id="water"
                type="checkbox"
                checked={drinks.includes('Water')}
                onChange={() => handleDrinksChange('Water')}
            />
            <label className="checkbox-label" htmlFor="red wine">Red wine</label>
            <input
                id="red wine"
                type="checkbox"
                checked={drinks.includes('Red wine')}
                onChange={() => handleDrinksChange('Red wine')}
            />
            <label className="checkbox-label" htmlFor="white wine">White wine</label>
            <input
                id="white wine"
                type="checkbox"
                checked={drinks.includes('White wine')}
                onChange={() => handleDrinksChange('White wine')}
            />
            <label className="checkbox-label" htmlFor="coke">Coke</label>
            <input
                id="coke"
                type="checkbox"
                checked={drinks.includes('Coke')}
                onChange={() => handleDrinksChange('Coke')}
            />
            <label className="checkbox-label" htmlFor="fanta">Fanta</label>
            <input
                id="fanta"
                type="checkbox"
                checked={drinks.includes('Fanta')}
                onChange={() => handleDrinksChange('Fanta')}
            />
        </div>
    )
}

export default DrinksInput