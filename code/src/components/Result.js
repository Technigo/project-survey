/* eslint-disable linebreak-style */
/* eslint-disable indent */
import React from 'react';

const Result = ({ name, food, drink }) => {
    return (
        <>
        <p>Your name is {name}</p>
        <p>Your favorite food is {food}</p>
        <p>Your favorite drink is {drink}</p>
        </>
    )
}

export default Result;