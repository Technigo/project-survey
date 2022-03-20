import React from 'react';

const Name = ({ nameInput, onNameInputChange, onStepChange }) => {

    return (
        <div className='container'>
           
                <div className='text-container'>
                    What's your name?
                    <input
                        className='name-input'
                        id="nameInput"
                        type="text"
                        value={nameInput}
                        onChange={onNameInputChange}
                    />
                </div>
            
        </div>
    );
};

export default Name;