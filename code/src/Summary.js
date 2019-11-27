import React from 'react';
// import React, { useState } from 'react'


export const Summary = (props) => {

    return (
        <div className="Summary">
            <h3>Thank you for your answers {props.name}!</h3>
            <p>You like {props.destinations} the most</p>

            <p>your next dream destination is {props.location}</p>
            <p>your age is {props.ageGroup}</p>
            <p>Have a nice trip {props.name}!</p>
        </div>


    )
}

