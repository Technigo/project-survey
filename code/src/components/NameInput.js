import React from 'react'

export const NameInput = ({name, setName}) => {

    const onNameChange = (e) => {
        console.log(`Name: ${e.target.value}`)
        setName(e.target.value)
    }
    
    return(
        <>
            <label htmlFor="name">What is Your Name: </label>
            <input 
                id="name" 
                type="text" 
                value={name} 
                onChange={onNameChange}
            />
        </>
    )
}