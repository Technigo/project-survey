import React from 'react';

export const TextInput = ({inputAnswer, question, inputSet, showNext}) => {
    
    return (
    <label className="text-label"><h3>{question}</h3>
        <input 
        type="text" 
        placeholder="Your text here"
        className="text-input"
        onChange= {event => inputSet(event.target.value)}
        value= {inputAnswer}></input>
        <button className="next-button" onClick={showNext}>Next</button>
    </label>
    );
}