import React from 'react';

export const Button = ({onClick, text}) => (
    <button onClick={onClick}>
        {text}
    </button>
)
