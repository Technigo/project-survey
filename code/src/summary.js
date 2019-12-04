import React from 'react'

export const Summary = (props) => (
    <div className="summary">
        <h1>Heres your result!</h1>
        <p>Hello {props.feeling}</p>
        <p>You are {props.happiness < 3 ? 'so so' : 'Super happy'} with our service</p>
        <p> You choose to do {props.treatment}</p>
        </div>
)