import React from 'react';

const Summary =({travelInput, destinationInput,budgetInput,awayInput}) => {
    return (
        <div className='summary'>
            <h3>Your result is that:</h3>
            <span>you want in the {travelInput},</span> 
            <span>{destinationInput} and have a budget of </span> 
            <span>{budgetInput} kr and want to be away for a {awayInput}</span>
        </div>
    );
};

export default Summary;