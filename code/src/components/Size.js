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
                type="checkbox"
                value="Small"
                onChange={handleSizeChange}
                checked={size === "Small"}
            />
            Small
        </label>
        <label>
            <input
                type="checkbox"
                value="Medium"
                onChange={handleSizeChange}
                checked={size === "Medium"}
            />
            Medium
        </label>
        <label>
            <input
                type="checkbox"
                value="Large"
                onChange={handleSizeChange}
                checked={size === "Large"}
            />
            Large
        </label>
        </form>
    )
};

//Add images in buttons