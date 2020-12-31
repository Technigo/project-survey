import React, { useState, useEffect, useRef } from 'react'

export const SpecialQuestion = ({special, setSpecial}) => {

    const [ firstRender, setFirstRender ] = useState(true);
    
    const legendToBeFocused = useRef(null);

    useEffect(() => {
        if (firstRender) {
            legendToBeFocused.current.focus();
            setFirstRender(false);
        }
    }, [firstRender]);

    
    return (
        <fieldset className="container" >
            <legend 
                tabIndex="0" 
                ref={legendToBeFocused} 
                aria-label="Please tab and type in why you like CraftBeer Company products. Then press enter to submit your answers and show the form summary.">
                    Why do you like Craft Beer Co. products?
            </legend>
            <label htmlFor="special">
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