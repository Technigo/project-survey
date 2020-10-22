import React from 'react';

const NameInput = ({ userName, onNameChange }) => {
    return (
        <div>
            <label htmlFor="userName">Name:</label>
            <input value={userName} onChange={onNameChange} id="userName" type="text" />
        </div>
    )
}

export default NameInput;