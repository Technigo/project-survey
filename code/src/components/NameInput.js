import React from 'react'

export const NameInput = ({name, setName}) => {

    const onNameChange = (e) => {
        console.log(`Name: ${e.target.value}`)
        setName(e.target.value)
    }
    
    return(
        <>
            <div className="name-input-container">
                <label htmlFor="name" className="name-label">What is Your Name: </label>
                <input 
                    id="name" 
                    type="text" 
                    value={name} 
                    onChange={onNameChange}
                    className="name-input"
                />
            </div>
        </>
    )
}