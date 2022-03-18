import React from 'react'

const Name = ({name, askName, error}) => {
    return (
        <div className="page-container" role="form">
        <h2><label htmlFor="name">Please enter your name:</label></h2>
        <input 
            id="name"
            type="text" 
            onChange={(event) => askName(event.target.value)} 
            value={name} 
        />
        {error !== 'noError' && <p className="error-message">{error}</p>}
        </div>
    )
}

export default Name
