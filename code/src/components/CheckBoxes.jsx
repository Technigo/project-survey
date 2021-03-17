import React from 'react';

export const CheckBoxes = ({ stack, onChange }) => {
    const onCheckChange = (e) => {
        console.log(`Stack: ${e.target.checked}`);
        onChange(e.target.checked, stack);
    }
    return (
        <div className="checkbox">
            <input 
                type="checkbox"
                id={stack}
                name={stack}
                onChange={onCheckChange}
                required
            />
            <label htmlFor={stack}>{stack}</label>
        </div>
    )
}