import React from 'react';

const Input = ({nameValue, onInputNameChange}) => {
    return(
            <div className="formelement">
                <label htmlFor={nameValue}></label>
                <input className="nameinputelement"
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