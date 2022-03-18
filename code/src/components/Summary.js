import React from 'react';

const Summary = ({nameInput, location, why}) => {

    return (
        <div>
            <h1>Summary</h1>
            <p>Hi {nameInput}! 
            You want to move to {location}. Nice! {why}
            </p>
        </div>
    )
}

export default Summary