import React from 'react'

export const Price = ({price, setPrice}) => {

    return ( 
        <div className="input-container">
            <h3>How much do you like to spend on a pint of craft beer?</h3>
            <label className="select-container">
                <select
                value={price} 
                onChange={event => setPrice(event.target.value)}>
                    <option value="" disabled selected>
                        Please select
                    </option>
                    <option value="50kr - 75kr">50kr - 75kr</option>
                    <option value="75kr - 100kr">75kr - 100kr</option>
                    <option value="100kr - 125kr">100kr - 125kr</option>
                    <option value="125kr - 150kr">125kr - 150kr</option>
                    required  
                </select>
            </label>
        </div>   
    );
};