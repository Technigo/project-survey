import React from 'react';

export const TextInput = ({inputAnswer, question, inputSet}) => {
    
    return (
    <label className="text-label"><h3>{question}</h3>
        <input 
        type="text" 
        placeholder="Your text here"
        className="text-input"
        onChange= {event => inputSet(event.target.value)}
        value= {inputAnswer}></input>
    </label>
    );
}