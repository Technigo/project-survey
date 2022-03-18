import React from 'react';
import './ResetButton.css';

const ResetButton = (props) => {
    return (
        <button
            className='reset-button'
            type="button"
            onClick={props.onButtonClick}>Restart</button>
    )
}

export default ResetButton;