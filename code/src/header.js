import React from 'react';

export const Header = () => {

    return (
        <div className='header-container'>
            <h1>Book a table at <span>Elsita & Alfredo</span></h1>
            <p>
            <span>Elsita & Alfredo</span> is a small family run authentic pizzeria. 
            Due to our small and intimate setting we don't have the space to accomodate groups larger than 8 people.
            </p>
            <p>
            PLease note that <span>Elsita & Alfredo</span> only accepts bookings for the upcoming weekend (Thur to Sun) of the current week.
            The booking for the week opens every Monday at 9.00. Luckily our delivery service delivers you favourite pizzas all days of the week, please 
            visit <a href='https://vibrant-ritchie-da31af.netlify.com'>our website</a> for more information!
            </p>
        </div>
    )
}