import React from 'react';
import Button from './Button';

const Summary = ({ nameInput, skinTypeInput, ageGroupInput, restartSteps }) => {
    return (
        <div className='flex'>
            Thank you! Here's a summary of your choices
            <p>{nameInput}</p>
            <p>{skinTypeInput}</p>
            <p>{ageGroupInput}</p>
            <Button buttonText="Restart" onClickFunction={restartSteps} />
        </div>
    );
};

export default Summary;