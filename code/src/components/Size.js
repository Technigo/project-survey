import React from 'react';

export const Size = ({ size, setSize }) => {
    const handleSizeChange = (event) => {
        setSize(event.target.value);
    }

    return (
        <form>
            <p>What size would you like?</p>      
        <label>
            <input
                type="radio"
                value="Small"
                onChange={event => setSize(event.target.value)}
                checked={size === "Small"}
            />
            Small
        </label>
        <label>
            <input
                type="radio"
                value="Medium"
                onChange={event => setSize(event.target.value)}
                checked={size === "Medium"}
            />
            Medium
        </label>
        <label>
            <input
                type="radio"
                value="Large"
                onChange={event => setSize(event.target.value)}
                checked={size === "Large"}
            />
            Large
        </label>
        </form>
    )
};

//Add images in buttons