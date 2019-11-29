import React from 'react';
// import React, { useState } from 'react'


export const Summary = (props) => {

    return (
        <div className="Summary">
            <p>Thank you for your answers {props.name}!</p>
            <p>Cool! you are up for {props.destinations}adventures!</p>

            <p>Most important to you is {props.location}</p>
            <p>You like to travel {props.ageGroup}</p>
            <p>Have a nice trip {props.name}!</p>
        </div>
    )
}
