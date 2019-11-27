import React from 'react';
// import React, { useState } from 'react'


export const Summary = (props) => {

    return (
        <div className="Summary">
            <h2>Thank you for your answers {props.name}!</h2>
            <p>You like
                {props.capetown} {props.grandcanyon} {props.maldives} {props.bali} the most</p>

            <p>your next dream destination is {props.location}</p>
            <p>your age is {props.ageGroup}</p>
            <p>Have anice trip!</p>
        </div>


    )
}
