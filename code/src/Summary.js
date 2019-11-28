import React from 'react';
// import React, { useState } from 'react'


export const Summary = (props) => {

    return (
        <div className="Summary">
            <h3>Thank you for your answers {props.name}!</h3>
            <p>Cool! you are up for {props.destinations}</p>

            <p>The most important thing to you is {props.location}</p>
            <p>You like to travel {props.ageGroup}</p>
            <p>Have a nice trip {props.name}!</p>
        </div>
    )
}
