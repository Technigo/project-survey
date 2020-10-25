import React from 'react';

const DrinksInput = ({ drinks, setDrinks }) => {

    const handleDrinksChange = drinksValue => {
        drinks.includes(drinksValue)
            ? setDrinks(drinks.filter(item => item !== drinksValue))
            : setDrinks([...drinks, drinksValue])
    }

    // const drinksArray = ['White wine', 'Red wine', 'Water', 'Coke', 'Fanta']

    return (
        <div>
            <p> Choose your drinks:</p>
           
            <label htmlFor="water">water</label>
            <input
                id="water"
                type="checkbox"
                checked={drinks.includes('water')}
                onChange={() => handleDrinksChange('water')}
            />
            <label htmlFor="red wine">Red wine</label>
            <input
                id="red wine"
                type="checkbox"
                checked={drinks.includes('red wine')}
                onChange={() => handleDrinksChange('red wine')}
            />
            <label htmlFor="white wine">White wine</label>
            <input
                id="white wine"
                type="checkbox"
                checked={drinks.includes('white wine')}
                onChange={() => handleDrinksChange('white wine')}
            />
            <label htmlFor="coke">Coke</label>
            <input
                id="coke"
                type="checkbox"
                checked={drinks.includes('coke')}
                onChange={() => handleDrinksChange('coke')}
            />
            <label htmlFor="fanta">Fanta</label>
            <input
                id="fanta"
                type="checkbox"
                checked={drinks.includes('fanta')}
                onChange={() => handleDrinksChange('fanta')}
            />
        </div>
    )
}

export default DrinksInput;