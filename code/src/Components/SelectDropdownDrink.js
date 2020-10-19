import React from 'react'

export const SelectDropdownDrink = ({drink, setDrink}) => { 
    
    return ( 
        <div className="dropdown-drink">
            <form>
                <select 
                onChange={event => setDrink(event.target.value)}
                value={drink}
                >
                <option value="" disabled>Select your favourite poison!</option>
                <option value="gin">Gin & Tonic</option>
                <option value="beer">Beer</option>
                <option value="wine">Wine</option>
                <option value="water">Water! To keep me hydrated!</option>
                </select>

            </form>
        </div>

        )}