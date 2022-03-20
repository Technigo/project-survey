import React from 'react';


const SubmitButton = ({ onStepChange }) => {
    return (
        <div className='button'>
            <button className='btn'
                onClick={onStepChange}>Submit</button>
        </div>
    )
};

export default SubmitButton;