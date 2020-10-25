import React from 'react'

export const Special = ({special, setSpecial}) => {
    
    return (
        <fieldset className="container">
            <legend tabIndex="0">Why do you like Craft Beer Co. products?</legend>
            <label for="special">
                <input className="text-input no-outline"
                    id="special"
                    name="special" 
                    type="text"
                    onChange={event => setSpecial(event.target.value)}
                    value={special}
                    placeholder="Please write here"
                />             
            </label>
        </fieldset>    
    );
};