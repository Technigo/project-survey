import React from "react";

// how much do you like autumn? range slider

const SecondQuestion = ({ rangeInput, onRangeInputChange, onStepChange }) => {
    return (
        <form>
            <label htmlFor="rangeInput"> How much do you like the Autumn?</label>
            <div>
                <input 
                id="rangeInput"
                type="range"
                min="0"
                max="10"
                value={rangeInput}
                onChange={onRangeInputChange}
                />
            </div>
            <div>
                {rangeInput}
            </div>

            <button onClick={onStepChange}>Next question</button>
        </form>
    )

}

export default SecondQuestion;