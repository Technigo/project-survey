import React, { useEffect, useState, useRef } from 'react';
import ReactTooltip from 'react-tooltip';

import { SpecialForm } from './SpecialForm';

export const PriceForm = ({age, name, type}) => {

    const [ firstRender, setFirstRender ] = useState(true);
    const [ price, setPrice ] = useState("");
    const [ nextQuestion, setNextQuestion ] = useState(false);

    const errorMessage = useRef(null);

    const handleSubmit = event => {
        if(price.length < 1) {
            ReactTooltip.show(errorMessage.current);
            event.preventDefault();
        } else {
            event.preventDefault();
            setNextQuestion(true);
        }
    }
    const legendToBeFocused = useRef(null);

    useEffect(() => {
        if (firstRender) {
            legendToBeFocused.current.focus();
            setFirstRender(false);
        }
    }, [firstRender]);

    return ( 
        <>
        {!nextQuestion ? (
            <form onSubmit={handleSubmit} className="form-container">
                <fieldset className="container price-container">
                    <legend 
                        tabIndex="0" 
                        ref={legendToBeFocused} 
                        aria-label="Please tab and select the price range you normally spend on a pint of craft beer using the up and down arrows. Then tab and press enter to go to the next question.">
                            How much do you like to spend on a pint of craft beer?
                    </legend>
                    <label 
                        className="select-container" 
                        htmlFor="price"
                        ref={errorMessage} 
                        data-tip="Please select a price range">
                            <ReactTooltip backgroundColor="rgb(11, 77, 149)" class="tooltip" />
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
                <button
                    type="submit" 
                    className="button yes-button" 
                    aria-label="Press the button to go to the next question">
                        NEXT QUESTION
                </button>
            </form>
        ) : (
            <SpecialForm name={name} age={age} type={type} price={price}/>
        )}
        </>
    );
};