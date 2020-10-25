import React from 'react'

export const Price = ({price, setPrice}) => {

    return ( 
        <fieldset className="container price-container">
            <legend tabIndex="0">How much do you like to spend on a pint of craft beer?</legend>
            <label className="select-container" for="price">
                <select
                value={price}
                onChange={event => setPrice(event.target.value)} 
                id="price"
                name="price">
                    <option value="" disabled>Please select</option>
                    <option value="50kr - 75kr">50kr to 75kr</option>
                    <option value="75kr - 100kr">75kr to 100kr</option>
                    <option value="100kr - 125kr">100kr to 125kr</option>
                    <option value="125kr - 150kr">125kr to 150kr</option>  
                </select>
            </label>
        </fieldset>
    );
};