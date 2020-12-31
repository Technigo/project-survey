import React, { useState, useEffect, useRef } from 'react';
import ReactTooltip from 'react-tooltip';

import { Summary } from '../pages/Summary';

export const SpecialForm = ({ name, age, type, price}) => {

    const [ firstRender, setFirstRender ] = useState(true);
    const [ special, setSpecial ] = useState("");
    const [ showSummary, setShowSummary ] = useState("");

    const errorMessage = useRef(null);

    const handleSubmit = event => {
        if (special.length < 1) {
            ReactTooltip.show(errorMessage.current);
            event.preventDefault();
        } else {
            event.preventDefault();
            setShowSummary(true);
        }
    };
    
    const legendToBeFocused = useRef(null);

    useEffect(() => {
        if (firstRender) {
            legendToBeFocused.current.focus();
            setFirstRender(false);
        }
    }, [firstRender]);

    
    return (
        <>
        {!showSummary ? (
            <form onSubmit={handleSubmit} className="form-container">
                <fieldset className="container">
                    <legend 
                        tabIndex="0" 
                        ref={legendToBeFocused} 
                        aria-label="Please tab and type in your feedback for CraftBeer Company products. Then press enter to submit your answers and show the form summary.">
                            General feedback: Please let us know what you think of our products!
                    </legend>
                    <label 
                        htmlFor="special"
                        ref={errorMessage}
                        data-tip="Please enter your feedback">
                            <ReactTooltip backgroundColor="rgb(11, 77, 149)" className="tooltip"/>
                        <input className="text-input no-outline"
                            id="special"
                            name="special" 
                            type="text"
                            onChange={event => setSpecial(event.target.value)}
                            value={special}
                            placeholder="Please write your feedback"
                        />             
                    </label>
                </fieldset> 
                <button
                    type="submit"
                    className="button yes-button" 
                    aria-label="Press the button to go to the next question">
                        SUBMIT SURVEY
                </button>
            </form>
        ) : (
            <Summary name={name} age={age} type={type} price={price} special={special} />
        )}
        </>   
    );
};