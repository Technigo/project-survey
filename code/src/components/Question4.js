import React from "react";

const Question4 = ({ whoInput, onWhoInputChange, onStepChange }) => {

    return (
        <form>
            <label htmlFor="whoInput">Who would you love to spend Christmas with?</label>
            <input id="whoInput" type="text" value={whoInput} onChange={onWhoInputChange} />

            <button onClick={onStepChange}>Next</button>
        </form>
    );
};

export default Question4;