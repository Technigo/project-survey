import React from "react";

const FourthQuestion = ({ onQuestionChange, weapon, companion, onCompanionChange }) => {
    return (
        <div>
            <form>
                <h2>Now, you have your {weapon} you need to choose a companion on this journey</h2>
                <label htmlFor="companion">Who will you bring?</label>
                <select 
                    name="companions" 
                    id="companion" 
                    value={companion}
                    onChange={onCompanionChange}
                >
                    <option value="">Select a companion</option>
                    <option value="">The Flamingo 🦩</option>
                    <option value="">The moon 🌛</option>
                    <option value="">A burrito 🌯</option>
                    <option value="">A unicorn 🦄</option>
                </select>
            </form>
            <button onClick={onQuestionChange}>Choose companion</button>
        </div>
    )
}

export default FourthQuestion
