import React from 'react';

const StartButton = ({onClick}) => {

    return (
        <button
            className='button'
            type="button"
            onClick={onClick}
        >Ok, let's get started!</button>
    )
}

export default StartButton;


