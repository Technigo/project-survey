import React, { useState } from 'react';

import { Summary } from './Summary';

const colors = ["red wine", "white wine", "rosé wine"];

export const Form = () => {
    const [name, setName] = useState('');
    const [wineColor, setWineColor] = useState('');
    const [country, setCountry] = useState('');
    const [counter, setCounter] = useState (0);


    const onNameChanged = (event) => {
        console.log(event.target.value);
        setName (event.target.value);
    }
     const onWineColorChanged = (event) => {
        console.log(event.target.value);
        setWineColor (event.target.value);
     }
    const onCountryChanged = (event) => {
        console.log(event.target.value);
        setCountry (event.target.value)
    }
    const onCounterChanged = (event) => {
        event.preventDefault();
        setCounter(counter + 1);
    }

    if (counter === 0) {
        return (
            <form className="form-container" >
                <h3 tabindex="0">Would you like to order, please fill in this form</h3>
            <div className="form-container-questions">
            <div className="name-question">
                <label tabindex="0" htmlFor="name">What is your name?</label>
                <input id="name" type="text" value={name} onChange={onNameChanged} required />
            </div>
            <div className="color-question">
                <p tabindex="0">Pick your favourite?</p>
            <   div className="color-wine">
                    {colors.map(color => (
                    <label key={color}>
                    <input name="wine color" 
                    id={color} 
                    type="radio" 
                    value={color} 
                    onChange={onWineColorChanged} 
                    checked={wineColor === color}
                    required
                    />
                    {color}
                    </label>
                    ))}
                </div>
            </div>

            <div className="country-question">
                <label tabindex="0" htmlFor="country">Pick a country?</label>
                <select id="country" value={country} onChange={onCountryChanged} required>
                    <option value="">Select</option>
                    <option value="Italy">Italy</option>
                    <option value="Spain">Spain</option>
                    <option value="France">France</option>
                    <option></option>
                </select>
                </div>
           
            <div>
            <button tabindex="0" type="submit" onClick={onCounterChanged} >ORDER!</button>
            </div>
            </div>
        </form>
        )
    } else {
        return(
            <Summary name={name} wineColor={wineColor} country={country}/>
        )
    }

};