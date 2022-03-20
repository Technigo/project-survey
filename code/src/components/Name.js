import React from 'react';

const Name = ({ nameInput, onNameInputChange, onStepChange }) => {

    return (
        <div className='container'>
            <div className='text-container'>
                <div>
                    Type your name
                    <input
                        className='name-input'
                        id="nameInput"
                        type="text"
                        value={nameInput}
                        onChange={onNameInputChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default Name;