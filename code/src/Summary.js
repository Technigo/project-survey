import React from 'react';
// import React, { useState } from 'react'


export const Summary = (props) => {

    return (
        <div className="Summary">
            <h2>Thank you for your answers {props.name}!</h2>
            <p>Cool, you are up for {props.destinations} adventures!</p>

            <p>Most important to you is {props.location}</p>
            <p>and you like to travel {props.ageGroup}</p>
            <p>Have a nice trip {props.name}!</p>
        </div>
    )
}
