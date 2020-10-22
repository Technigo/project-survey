import React from 'react';


const NameField = ({name, setName}) => {
    
    return (
        <>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                type="text"
                onChange={event => setName(event.target.value)}
                value={name}
            />
        </>
    )
}

export default NameField;