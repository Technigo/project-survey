import React from 'react';

export const Result = ({ name, size, flavor, topping }) => {
    return (
        <>
            <h3>Thank you for ordering a {size} {flavor} popcorn with {topping}.</h3>
            <p>{name}, your 🍿 order will be ready at the kiosk in 2 minutes.</p>
            <button className='new-order-button' title='Place a new order' type='submit' onClick={() => window.location.reload(false)}>
                Place a new order
            </button>
        </>
    ); 
}