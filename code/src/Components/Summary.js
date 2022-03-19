import React from 'react';

const Summary =({personInput, destinationInput,budgetInput,awayInput}) => {
    return (
        <main className='main-container summary'>
            <h1>This survey show that:</h1>
            <p><span>You want to travel {personInput}</span></p> 
            <p><span>and you want to {destinationInput}.</span></p> 
            <p><span>Your budget is {budgetInput} </span> </p>
            <p><span>and  you want to be away for {awayInput}!</span></p>
            <p>I hope you will have the chance to make this trip soon!</p>
        </main>
    );
};

export default Summary;