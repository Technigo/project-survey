import React, { useState } from 'react';

const TextInputName = (props) => {
    return (
        <div className="text-input-wrapper">
            <label htmlFor="name">{props.label}</label>
            <input 
                id="name"
                type="text"
            />

        </div>
    )
}
export default TextInputName