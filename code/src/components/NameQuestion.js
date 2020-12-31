import React, { useState, useRef, useEffect } from 'react'

export const NameQuestion = ({name, setName}) => {
   
    const [ firstRender, setFirstRender ] = useState(true);
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
        <fieldset className="container">
            <legend 
                tabIndex="0" 
                ref={legendToBeFocused} 
                aria-label="Please tab and enter your name in the box. Then press enter to go to the next question">
                    Please enter your name
            </legend>
            <label htmlFor="name">
                <input
                    id="name"
                    name="name" 
                    aria-label="Enter name in box"
                    className="text-input no-outline"
                    type="text"
                    onChange={event => setName(event.target.value)}
                    value={name}
                    placeholder="Enter your name"
                    required
                />
            </label>         
        </fieldset>
    );
};