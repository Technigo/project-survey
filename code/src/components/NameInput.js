import React from 'react'

export const NameInput = ({name, setName}) => {

    const onNameChange = (e) => {
        setName(e.target.value)
    }
    
    return(
        <>
            <div className="name-input-container">
                <label htmlFor="name" className="name-label" tabIndex="0">What is Your Name: </label>
                <input 
                    id="name" 
                    type="text" 
                    value={name} 
                    onChange={onNameChange}
                    placeholder="Type your name here..."
                    className="name-input"
                    required
                    tabIndex="0"
                />
            </div>
        </>
    )
}