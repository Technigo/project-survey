import React from 'react';

export const TextInput = ({inputAnswer, question, inputSet}) => {
    
    return (
    <label className="text-label">{question} {inputAnswer}
        <input 
        type="text" 
        className="text-input"
        onChange= {event => inputSet(event.target.value)}
        value= {inputAnswer}></input>
    </label>
    );
}