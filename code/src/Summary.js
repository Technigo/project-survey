import React from 'react';
// import React, { useState } from 'react'


export const Summary = (props) => {

    // const [submit, setSubmit] = useState()

    return (
        <div className="Summary">
            <h2>Thank you for your answers {props.name}!</h2>
            <p>you think it's going to be{props.temperature} degrees today</p>
            <p>your next destination is{props.location}</p>
            <p>your age is {props.ageGroup}</p>
        </div>


    )
}
