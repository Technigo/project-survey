import React from 'react';

import 'components/TextinputCss.css';


// Textinput is here a function component (a module) that is a self contained unit that 
//can pass data to other components (modules) using export, and in turn access
// assets from other modules using import (here React). Below, "name" is the value and "setName"
// is the function we use to change the state of that value. For this to happen we need to call on
//the function/hook useState. 
//useState in this example is declared in the parent component App.js

// In order for React to render the input collected from the input field, the value has to be stored 
// and passed on to App.js (for further passing on to index.js and index.htlm). App.js can access 
// the value through the use of props. Props stores the values.
export const Textinput = ({name, setName}) => {
  
  return (
    <label htmlFor="name" id="name">
      <h2 tabindex="0">1. What's your name?</h2>
      <input
        type="text"
        onChange={(event) => setName(event.target.value)} //This setName function allows us to change the state
        //of the input. The event is when something is changed/typed (the value) in the input field. The parameter event 
        //targets the value from the input field. And the value={name} is passed on to App.js using props, and can then be changed by
        //calling the useState function in App.js. App.js picks up the name value and we can call useState() to
        //alter the state.
         
        value={name}
        placeholder="  Your name here"
        required
      />
    </label>
  );
};


