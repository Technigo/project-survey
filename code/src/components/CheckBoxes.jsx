import React from 'react';

export const CheckBoxes = ({ stack, onChange }) => {
    const onCheckChange = (e) => {
        onChange(e.target.checked, stack);
    }
    return (
        <div className="checkbox">
            <input 
                type="checkbox"
                id={stack}
                name={stack}
                onChange={onCheckChange}
                tabIndex="0"
                aria-label="Select preferred stacks"
                required
            />
            <label tabIndex="0" htmlFor={stack}>{stack}</label>
        </div>
    )
}