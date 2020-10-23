import React from 'react';

const DrinksInput = ({ userDrinks, userSetDrinks }) => {

    const handleDrinksChange = drinksValue => {
        userDrinks.includes(drinksValue)
            ? userSetDrinks(userDrinks.filter(item => item !== drinksValue))
            : userSetDrinks([...userDrinks, drinksValue])
    }

    // const drinksArray = ['White wine', 'Red wine', 'Water', 'Coke', 'Fanta']

    return (
        <div>
            <p> Choose your drinks:</p>
           
            <label htmlFor="water">water</label>
            <input
                id="water"
                type="checkbox"
                checked={userDrinks.includes('water')}
                onChange={() => handleDrinksChange('water')}
            />
            <label htmlFor="red wine">Red wine</label>
            <input
                id="red wine"
                type="checkbox"
                checked={userDrinks.includes('red wine')}
                onChange={() => handleDrinksChange('red wine')}
            />
            <label htmlFor="white wine">White wine</label>
            <input
                id="white wine"
                type="checkbox"
                checked={userDrinks.includes('white wine')}
                onChange={() => handleDrinksChange('white wine')}
            />
            <label htmlFor="coke">Coke</label>
            <input
                id="coke"
                type="checkbox"
                checked={userDrinks.includes('coke')}
                onChange={() => handleDrinksChange('coke')}
            />
            <label htmlFor="fanta">Fanta</label>
            <input
                id="fanta"
                type="checkbox"
                checked={userDrinks.includes('fanta')}
                onChange={() => handleDrinksChange('fanta')}
            />
        </div>
    )
}

export default DrinksInput;