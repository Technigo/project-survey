import React from 'react';

export const RadioButton = ({alt, onChange, checked}) => (
    <label className='radio-button' htmlFor={alt}>
        {alt}
    
        <input
            id={alt}
            type='radio'
            value={alt}
            onChange={onChange}
            checked={checked}
        />
    </label>
)
