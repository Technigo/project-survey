import React from 'react';

export const SelectDropdownDrink = ({drink, setDrink}) => {    
    return ( 
            <div>
                <h2>Magic Potion!</h2>
                <select autoFocus
                onChange={event => setDrink(event.target.value)}
                value={drink}
                required
                >
                <option value='' disabled>Select your favourite magic potion!</option>
                <option value='Gin & Tonic'>Gin & Tonic</option>
                <option value='Beer'>Beer</option>
                <option value='Wine'>Wine</option>
                <option value='Water'>Water! To keep me hydrated!</option>
                </select>
            </div>
    );
};