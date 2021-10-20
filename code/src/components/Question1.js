import React from "react";

const Question1 = ({ traditionInput, onTraditionInputChange, onStepChange }) => {

    return (
        <form>
            <label htmlFor="traditionInput">Favorite Christmas tradition?</label>
            <input id="traditionInput" type="text" value={traditionInput} onChange={onTraditionInputChange} />

            <button onClick={onStepChange}>Next</button>
        </form>
    );
};

export default Question1;