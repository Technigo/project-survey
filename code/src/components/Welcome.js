import React from 'react';

//This is the first page the user is greeted by, and the servey starts with "onStepChange" when button is clicked
const Welcome = ({ onStepChange }) => {
    return(
        <form className="section">
            <h2>Welcome!</h2>
                <label>This is a small survey about seasons!</label>
            <button onClick={onStepChange}>Let's begin</button>
        </form>
    )};

export default Welcome;

