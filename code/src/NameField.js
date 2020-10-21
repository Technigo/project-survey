import React from 'react';


const NameField = ({name, setName}) => {
    
    return (
        <>
            <label>Name</label>
            <input
                type="text"
                onChange={event => setName(event.target.value)}
                value={name}
            />
        </>
    )
}

export default NameField;