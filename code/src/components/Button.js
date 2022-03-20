import React from 'react';


const Button = ({ onStepChange }) => {
    return (
        <div className='button'>
            <button className='btn'
                onClick={onStepChange}>Next</button>
        </div>
    )
};

export default Button;