import React, { useState, useRef, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';

import { AgeForm } from './AgeForm';

export const NameForm = () => {
   
    const [ nextQuestion, setNextQuestion ] = useState(false);
    const [ name, setName ] = useState("");
    const [ firstRender, setFirstRender ] = useState(true);

    /* Using the useRef() to help with the implementation of the error message that's shown if the user presses the next question button before typing their name in the input box.    
    ReactToolTip is a pre-defined tooltip that I've used that'll allow for the required/error message to be shown.
    Have done this for all of the form components */
    const errorMessage = useRef(null);

    /* Function that handles what happens when the form is submitted. Either the error message is shown as the user didn't enter anything or the setNextQuestion state is changed to true and thus showing the next component. */
    const handleSubmit = event => {
        if (name.length < 1) {
            ReactTooltip.show(errorMessage.current);
            event.preventDefault();
        } else {
            event.preventDefault();
            setNextQuestion(true);
        }
    };

    /*
    Defining the useRef() hook so it can be used in relation to the focus() javascript method when the user clicks onto each new question and the component is mounted. useRef() allows for us to access JSX elements and use javascript method on them. Focus() gives focus to a specific JSX element in this case it is the legend below.
    Using useEffect allows for this to be done when the component is mounted and everytime it's rendered. The reason I use focus() is because I was having issues when using the screen reader and tabIndex didn't work when I applied it to the specific part of the page I wanted the screen reader to focus on when the page is rendered i.e. the legend. Instead it was focusing on the next question button.

    */
   const legendToBeFocused = useRef(null);

   /* useState setFirstRender is used to stop the focus from hopping back to the legend everytime the component is rendered. It is rendered everytime the user selects a radio button, or writes their name etc.*/
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
                        aria-label="Please tab and enter your name in the box. Then press enter to go to the next question.">
                            Please enter your name
                    </legend>
                    <label htmlFor="name" ref={errorMessage} data-tip="Please enter your name">
                        <ReactTooltip backgroundColor="rgb(11, 77, 149)" class="tooltip" />
                        <input
                            id="name"
                            name="name" 
                            aria-label="Enter name in box"
                            className="text-input no-outline"
                            type="text"
                            onChange={event => setName(event.target.value)}
                            value={name}
                            placeholder="Enter your name"
                        />
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
            <AgeForm name={name}/>
        )}
        </>
    );
};