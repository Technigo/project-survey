import React from 'react';

const Summary =({travelInput, destinationInput,budgetInput,awayInput}) => {
    return (
        <div className='summary'>
            The result of your booking is that you want in the {travelInput}, {destinationInput} and have a budget of {budgetInput} kr and want to be away for a {awayInput}
        </div>
    );
};

export default Summary;