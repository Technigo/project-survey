import React from "react";

// what do you like to do during the autumn? dropdown

const ThirdQuestion = ({ selectInput, onSelectInputChange, onStepChange, onMinusStepChange }) => {
    
    return (
        <form>
            <label htmlFor="selectInput">Select your favourite Autumn drink:</label>
            <select
                id="selectInput"
                name="selectInput"
                value={selectInput}
                onChange={onSelectInputChange}
            >
                <option 
                    name="" 
                    > 
                </option>
                <option 
                    name="Tea"         
                > 
                    Tea
                </option>
                <option 
                    name="Coffee"
                > 
                    Coffee
                </option>
                <option 
                    name="Hot Chocolate"
                > 
                    Hot chocolate
                </option>
            </select>

            <button onClick={onStepChange}>Next question</button>
            <button onClick={onMinusStepChange}>Previous question</button>
        </form>
    )
    
}

export default ThirdQuestion;