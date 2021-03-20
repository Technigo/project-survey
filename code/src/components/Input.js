import React from 'react';

const Input = ({question, nameValue, onInputNameChange}) => {
    return(
            <div>
                <label htmlFor={nameValue}>{question}</label>
                <input 
                    id={nameValue} 
                    type="text"
                    value={nameValue}
                    onChange={onInputNameChange}
                    required
                />
            </div>
    )
}

export default Input;