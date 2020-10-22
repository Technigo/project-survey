import React from 'react';

const DrinksInput = ({ userDrinks, onDrinksChange }) => {
    return (
        <div>
                Choose your drinks:
                <label htmlFor="water">water</label>
                <input
                    id="water"
                    type="checkbox"
                    checked={userDrinks.includes('water')}
                    onChange={() => onDrinksChange('water')}
                />
                <label htmlFor="red wine">Red wine</label>
                <input 
                id="red wine" 
                type="checkbox" 
                checked={userDrinks.includes('red wine')}
                onChange={() => onDrinksChange('red wine')}
                 />
                <label htmlFor="white wine">White wine</label>
                <input
                    id="white wine"
                    type="checkbox"
                    checked={userDrinks.includes('white wine')}
                    onChange = {() => onDrinksChange('white wine')}
                     />
                <label htmlFor="coke">Coke</label>
                <input 
                id="coke" 
                type="checkbox" 
                checked={userDrinks.includes('coke')} 
                onChange={() => onDrinksChange('coke')} 
                />
                <label htmlFor="fanta">Fanta</label>
                <input 
                id="fanta" 
                type="checkbox" 
                checked={userDrinks.includes('fanta')} 
                onChange = {() => onDrinksChange('fanta')}  
                />
            </div>
    )
}

export default DrinksInput;