import React from 'react';


const TryAgainButton = ({ onRestartChange }) => {
    return (
        <div className='button'>
            <button className='btn'
                onClick={onRestartChange}>Try again</button>
        </div>
    );
};

export default TryAgainButton;