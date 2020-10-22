import React from 'react'


export const Summary = ({ageGroup, location, text}) => {
    return (
    <div className='summary'>
        <h3 tabIndex='0'>Summary</h3>
            <p tabIndex='0'>Your age: {ageGroup}</p>
            <p tabIndex='0'>You are from: {location}</p>
            <p tabIndex='0'>You wanted to become a Frontend developer because: {text}</p>
            <p className='thank-you' tabIndex='0'>Thank you for answering and have a nice day!</p>
    </div>
    )
};