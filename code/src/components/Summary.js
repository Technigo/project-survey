import React from 'react';
import Button from './Button';

const Summary = ({ nameInput, skinTypeInput, ageGroupInput, restartSteps }) => {
    return (
        <div className='flex-summary'>
            <div className='heading'>Thank you! Here's a summary of your choices</div>
            <div>{nameInput}</div>
            <div>{skinTypeInput}</div>
            <div>{ageGroupInput}</div>
            <Button buttonText="Restart" onClickFunction={restartSteps} />
        </div>
    );
};

export default Summary;