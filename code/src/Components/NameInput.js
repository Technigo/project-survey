import React from 'react';

const NameInput = ({ userName, userSetName }) => {

    const handleNameChange = event => {
        userSetName(event.target.value);
    }
    return (
        <div>
            <label htmlFor="userName">Name:</label>
            <input value={userName} onChange={handleNameChange} id="userName" type="text" />
        </div>
    )
}

export default NameInput;