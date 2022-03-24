import React from 'react';

export const RadioButton = ({alt, onChange, checked}) => (
    <label className='radio-button'>
        {alt}
        <input
            type='radio'
            value={alt}
            onChange={onChange}
            checked={checked}
        />
    </label>
)
