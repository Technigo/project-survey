import React from 'react';

export const Result = ({ name, size, flavor, topping }) => {
    return (
        <>
            <p>Thank you for ordering a {size} {flavor} popcorn with {topping}.</p>
            <p>{name}, your 🍿 order will be ready in 2 minutes.</p>
        </>
    ); 
}