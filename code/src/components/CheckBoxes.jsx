import React from 'react';

export const CheckBoxes = ({ stack, setCheckBox }) => {
    const onCheckChange = (e) => {
        console.log(`Stack: ${e.target.checked}`);
        setCheckBox(e.target.checked);
    }
    return (
        <div className="checkbox">
            <input 
                type="checkbox"
                id={stack}
                name={stack}
                checked={stack}
                onChange={onCheckChange}
                required
            />
            <label htmlFor={stack}>{stack}</label>
        </div>
    )
}