import React from 'react';


const StartButton = ({ buttonInput, onStepChange }) => {
    return (
        
            <div className='button'>
                <button className='btn'
                    onClick={onStepChange}>Start</button>
            </div>
    
    );
};

export default StartButton;