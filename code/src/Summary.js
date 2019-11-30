import React from 'react';
// import React, { useState } from 'react'


export const Summary = (props) => {

    return (
        <div className="Summary">
            <h2>Thank you for your answers {props.name}!</h2>
            <p>Cool, you are up for {props.adventures} in {props.destinations}!</p>
            {/* <p>{props.destinations}!</p> */}

            <p>The most important thing to you is {props.mostImportant}</p>
            <p>and you like to travel {props.ageGroup}.</p>
            <p>Have a great adventure 2020 {props.name}!</p>
        </div>
    )
}
