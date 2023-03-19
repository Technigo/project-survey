/* eslint-disable */
import React from 'react';

export const Size = ({ size, setSize }) => {
    const handleSizeChange = (event) => {
        setSize(event.target.value);
    }

    return (
            <form onSubmit={event => event.preventDefault()}>
            <p>What size would you like?</p>      
        <label>
            <input
                id="size-small"
                className="size-input"
                type="radio"
                value="small"
                onChange={handleSizeChange}
                checked={size === "small"}
                aria-label="Size small"
                required
            />
            Small
        </label>
        <label>
            <input
                id="size-medium"
                className="size-input"
                type="radio"
                value="medium"
                onChange={handleSizeChange}
                checked={size === "medium"}
                aria-label="Size medium"
                required
            />
            Medium
        </label>
        <label>
            <input
                id="size-large"
                className="size-input"
                type="radio"
                value="large"
                onChange={handleSizeChange}
                checked={size === "large"}
                aria-label="Size large"
                required
            />
            Large
        </label>
        </form>
    );
};