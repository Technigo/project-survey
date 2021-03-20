import React from 'react';

export const Name = ({ name, setName }) => {
    const onNameChange = (e) => {
        console.log(`Name: ${e.target.value}`);
        setName(e.target.value);
    }
    
    return (
        <>
        <h4 tabIndex="0">What's your name?</h4>
            <div className="form-components">
                {/* <label tabIndex="0" htmlFor={name}>Enter your name:</label> */}
                <input 
                    type="text"
                    onChange={onNameChange} 
                    value={name}
                    min="2"
                    max="50"
                    placeholder="Name"
                    aria-label="Input your name"
                    required
                />
            </div>
        </>
    )
}
