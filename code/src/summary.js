import React from 'react'

export const Summary = (props) => (
    <div>
        <h1>Heres your result!</h1>
        <p>Hello {props.feeling}</p>
        <p>You are {props.happiness === 'star1' ? 'so so' : 'Super happy'} with our service</p>
        <p> {props.location}</p>
        </div>
)