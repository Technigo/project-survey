import React from 'react';

const Summary = ({nameInput, location}) => {

    return (
        <div>
            <h1>Summary</h1>
            <p>
                {nameInput}
                {location}
            </p>
        </div>
    )
}

export default Summary