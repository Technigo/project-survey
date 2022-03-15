import React from 'react'

const Name = (props) => {
    return (
        <div className="page-container">
        <h2>Please input your first name:</h2>
        <input type="text" onChange={(event) => props.askName(event.target.value)} value={props.name} required/>
        </div>
    )
}

export default Name