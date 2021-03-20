import React from 'react';

const Input = ({question, inputName, onInputNameChange}) => {
    return(
            <div>
                <label htmlFor="name">{question}</label>
                <input 
                    id="name" 
                    type="text"
                    value={inputName}
                    onChange={onInputNameChange}
                    required
                />
            </div>
    )
}

export default Input;