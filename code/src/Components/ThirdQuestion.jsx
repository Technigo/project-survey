import React from 'react'

const ThirdQuestion = ({triggerUsername, stateUsername}) => {
    

    return (
        <>
        <label htmlFor='name'>Name</label>
        <input 
            id='name' 
            type='text' 
            value={stateUsername}
            onChange={(event) => triggerUsername(event)}
        />
        </>
    )
}

export default ThirdQuestion