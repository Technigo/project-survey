import React from 'react';

const Summary =({personInput, destinationInput,budgetInput,awayInput}) => {
    return (
        <main className='main-container summary'>
            <h1 tabindex="0">This survey show that:</h1>
            <p tabindex="0"><span>You want to travel {personInput}</span></p> 
            <p tabindex="0"><span>and you want to {destinationInput}.</span></p> 
            <p tabindex="0"><span>Your budget is {budgetInput} </span> </p>
            <p tabindex="0"><span>and  you want to be away for {awayInput}!</span></p>
            <p tabindex="0">I hope you will have the chance to make this trip soon!</p>
        </main>
    );
};

export default Summary;