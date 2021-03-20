import React from 'react';

export const SubmitButton = ({
    onClick
}) => {
    return (
        <button 
            className="submit-btn" 
            value="Submit" 
            onClick={onClick}
            >
            Submit
        </button>
    )
}