import React from 'react'


export const Summary = ({ageGroup, location, text}) => {
    return (
    <div className='summary'>
        <h3>Summary</h3>
        <p>Your age: {ageGroup}</p>
        <p>You are from: {location}</p>
        <p>You wanted to become a Frontend because: {text}</p>
        </div>
    )
};