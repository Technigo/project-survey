import React from 'react'

export const Input = ({
    labelKey='',
    labelClassName='',
    label,
    onChange,
    value='',
    placeholder='',
    type='text'
    }) => {
    
        return (
            <label key={labelKey} className={labelClassName}>
                {label}
                <input
                    type={type}
                    onChange={onChange}
                    value={value}
                    placeholder={placeholder}
                />
            </label>
        )
}
