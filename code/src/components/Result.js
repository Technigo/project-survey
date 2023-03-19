/* eslint-disable */
import React from 'react';

export const Result = ({ name, size, flavor, time }) => {
    return (
        <>
            <p>Thank you <strong>{name}</strong> for ordering a <strong>{size} {flavor} popcorn! </strong></p>
            <p>Your order will be ready at the kiosk at <strong>{time}</strong>.</p>
            <button className="new-order-button" title="Place a new order" type="submit" onClick={() => window.location.reload(false)}>
                Place a new order
            </button>
        </>
    ); 
}