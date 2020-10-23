import React from 'react'

export const Button = (props) => {
    return (
        <button type="submit" className="submit-button" disabled={props.name === ''}> Submit </button>
    );
};