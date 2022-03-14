import React from 'react'

const Name = (props) => {
    return (
        <>
        <h2>Please provide your name:</h2>
        <input type="text" onChange={(event) => props.askName(event.target.value)} value={props.name} required/>
        </>
    )
}

export default Name