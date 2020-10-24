import React from 'react';


const NameField = ({name, setName}) => {
    
    return (
        <>
            <label htmlFor="name" tabIndex="0">Name</label>
            <input
                id="name"
                type="text"
                onChange={event => setName(event.target.value)}
                value={name}
                required
                aria-required
            />
        </>
    )
}

export default NameField;