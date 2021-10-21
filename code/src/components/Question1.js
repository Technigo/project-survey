import React from "react";

const Question1 = ({ traditionInput, onTraditionInputChange, onStepChange }) => {

    return (
        <form className="form">
            <label htmlFor="traditionInput">1. Favorite Christmas tradition?</label>
            <input 
                id="traditionInput" 
                type="text" 
                value={traditionInput} 
                onChange={onTraditionInputChange}
                placeholder="Type your answer here..." />

            <button onClick={onStepChange}>Next</button>
        </form>
    );
};

export default Question1;