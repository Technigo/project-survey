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
                    aria-label="Please tab and enter your age range by using the space bar to select. Then press enter to go to the next question.">
                        What's your age range?
                </legend>
                    <div 
                        className="radio-button-row"
                        role="radiogroup"
                        ref={errorMessage} 
                        data-tip="Please select an age range">
                        <ReactTooltip backgroundColor="rgb(11, 77, 149)" class="tooltip" /> 
                        <label 
                            aria-label="Option 18-30" 
                            htmlFor="AgeRange18-30" className="radio-button-container">
                            <input 
                                type="radio"  
                                name="AgeRange" 
                                id="AgeRange18-30" 
                                value="18-30" 
                                onChange={event => setAge(event.target.value)} 
                                checked={age === "18-30"}
                            />
                        18-30
                            <span className="custom-radio"></span>
                        </label>               

                        <label 
                            htmlFor="AgeRange30-40" 
                            className="radio-button-container" 
                            aria-label="Option 30-40">
                                <input 
                                    id="AgeRange30-40"
                                    name="AgeRange"
                                    type="radio"
                                    value="30-40"
                                    onChange={event => setAge(event.target.value)}
                                    checked={age === "30-40"}
                                />
                        30-40 
                            <span className="custom-radio"></span>                 
                        </label>
                        <label 
                            htmlFor="AgeRange40-50" 
                            className="radio-button-container" 
                            aria-label="Option 40-50">
                            <input
                                    id="AgeRange40-50"
                                    name="AgeRange" 
                                    type="radio"
                                    value="40-50"
                                    onChange={event => setAge(event.target.value)}
                                    checked={age === "40-50"}
                                />
                        40-50
                            <span className="custom-radio"></span>                  
                        </label>

                        <label 
                            htmlFor="AgeRange50+" 
                            className="radio-button-container" 
                            aria-label="Option 50+">                    
                                <input
                                    id="AgeRange50+"
                                    name="AgeRange"
                                    type="radio"
                                    value="50+"
                                    onChange={event => setAge(event.target.value)}
                                    checked={age === "50+"}
                                />
                        50+
                            <span className="custom-radio"></span>                 
                        </label>
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