import React from 'react';

const NameInput = ({ name, setName }) => {

    const handleNameChange = event => {
        setName(event.target.value);
    }

    return (
        <div>
            <label htmlFor="name" className="name">Name:  </label>
            <input
                type="text"
                value={name}
                className="text-input"
                onChange={handleNameChange}
                id="name"
            />
        </div>
    )
}

export default NameInput;