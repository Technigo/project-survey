import React from 'react';

export const Result = ({ name, size, flavor, topping }) => {
    return (
        <>
            <p>Your name is {name}.</p>
            <p>You ordered a {size} {flavor} popcorn with {topping}.</p>
        </>
    ); 
}