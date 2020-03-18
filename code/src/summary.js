import React from 'react';

export const Summary = (props) => {
    const { name, day, dinnerTime, guests, location } = props;
    
    return (
        <section className='summary-container'>
            <h1>Welcome to <span>Elsita & Alfredo</span>, {name}!</h1>
            <p>We're looking forward to having you come dine with us on {day} at {dinnerTime}.
            You have booked one table for {guests} at our {location} restaurant.</p>
        </section>
    );
};


