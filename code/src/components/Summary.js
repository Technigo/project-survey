import React from 'react';

const Summary = ({nameInput, location, why}) => {

    return (
        <div>
            <label htmlFor='summary' label='summary' className='question-text'>Thank you {nameInput}!</label>
            <p>You want to move to {location}, which actually is the best area in Sockholm. {why}. Great choice!
            </p>
        </div>
    )
}

export default Summary