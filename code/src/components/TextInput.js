import React from 'react';

export const TextInput = ({inputAnswer, question, inputSet, showNext, textName}) => {
    
    return (
    <label className="text-label"><h3>{question}</h3>
        <input 
            type="text" 
            placeholder="Your text here"
            className="text-input"
            onChange= {event => inputSet(event.target.value)}
            value= {inputAnswer}
            name={textName}
            id={textName}
            required
        ></input>
        <button className="next-button" onClick={showNext}>Next</button>
    </label>
    );
}