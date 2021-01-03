import React, { useState, useRef, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';

import { TypeForm } from './TypeForm';

export const AgeForm = ({ name }) => {

    const [ firstRender, setFirstRender ] = useState(true);
    const [ age, setAge ] = useState("");
    const [ nextQuestion, setNextQuestion ] = useState(false);
    const errorMessage = useRef(null);

    const handleSubmit = event => {
        if (age.length < 1) {
            ReactTooltip.show(errorMessage.current);
            event.preventDefault();
        } else {
            event.preventDefault();
            setNextQuestion(true);
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
        {!nextQuestion ? (
            <form onSubmit={handleSubmit} className="form-container">
                <fieldset className="container">
                    <legend 
                        tabIndex="0" 
                        ref={legendToBeFocused} 
                        aria-label="Please tab and enter your age range using the up and down arrows to select. Then press enter to go to the next question.">
                            What's your age range?
                    </legend>
                    <div 
                        className="radio-button-row"
                        role="radiogroup"
                        ref={errorMessage} 
                        data-tip="Please select an age range">
                        <ReactTooltip backgroundColor="rgb(11, 77, 149)" class="tooltip" /> 
                        <div                className="radio-wrapper"                       aria-label="Option 18-30">
                            <input 
                                type="radio" 
                                name="AgeRange" 
                                id="AgeRange18-30"
                                value="18-30" 
                                onChange={event => setAge(event.target.value)} 
                                checked={age === "18-30"}
                             />
                            <label 
                                htmlFor="AgeRange18-30"
                                > 18-30
                            </label>
                        </div>
                        <div 
                            className="radio-wrapper" 
                            aria-label="Option 30-40">
                            <input 
                                type="radio" 
                                name="AgeRange" 
                                id="AgeRange30-40"
                                value="30-40" 
                                onChange={event => setAge(event.target.value)} 
                                checked={age === "30-40"}
                             />
                            <label 
                                htmlFor="AgeRange30-40"
                                > 30-40
                            </label>
                        </div>
                        <div 
                            className="radio-wrapper"
                            aria-label="Option 40-50">
                            <input
                                type="radio" 
                                name="AgeRange" 
                                id="AgeRange40-50"
                                value="40-50" 
                                onChange={event => setAge(event.target.value)} 
                                checked={age === "40-50"}
                             />
                            <label 
                                htmlFor="AgeRange40-50"
                                > 40-50
                            </label>
                        </div>
                        <div 
                            className="radio-wrapper"
                            aria-label="Option 50+">
                            <input 
                                type="radio" 
                                name="AgeRange" 
                                id="AgeRange50+"
                                value="50+" 
                                onChange={event => setAge(event.target.value)} 
                                checked={age === "50+"}
                             />
                            <label 
                                htmlFor="AgeRange50+"
                                > 50+
                            </label>
                        </div>
                    </div>
                </fieldset>
                <button 
                    type="submit" 
                    className="button yes-button" 
                    aria-label="Press the button to go to the next question">
                        NEXT QUESTION
                </button>
        </form>
        ) : (
            <TypeForm name={name} age={age}/>
        )}
        </>        
    );
};