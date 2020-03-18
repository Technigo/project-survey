import React from "react";

export const Checkbox = (props) => {
    const { text, checkbox, setCheckbox } = props;

    return (
        <div className='checkbox'>
            <label className='radio-container' >
                <p>{text}</p>
                <input
                    type='checkbox'
                    checked={checkbox}
                    onChange={event => setCheckbox(event.target.checked)}
                    required
                />
                <span className='checkmark'></span>
            </label>
        </div>
    );
};