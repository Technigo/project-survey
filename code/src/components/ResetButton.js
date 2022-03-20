import React from 'react';

const ResetButton = ({ onClick }) => {
    return (
        <button
            className='button'
            type="button"
            onClick={onClick}>Restart</button>
    )
}

export default ResetButton;