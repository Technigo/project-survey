import React from 'react';

export const Size = ({ size, setSize }) => {
    const handleSizeChange = (event) => {
        setSize(event.target.value);
    }

    return (
        <section className="sizecontainer">
        <form onSubmit={event => event.preventDefault()}>
            <p>What size would you like?</p>      
        <label>
            <input
                id="size-small"
                className="size-input"
                type="checkbox"
                value="Small"
                onChange={handleSizeChange}
                checked={size === "Small"}
                aria-label="Size Small"
                required
            />
            Small
        </label>
        <label>
            <input
                id="size-medium"
                className="size-input"
                type="checkbox"
                value="Medium"
                onChange={handleSizeChange}
                checked={size === "Medium"}
                aria-label="Size Medium"
                required
            />
            Medium
        </label>
        <label>
            <input
                id="size-large"
                className="size-input"
                type="checkbox"
                value="Large"
                onChange={handleSizeChange}
                checked={size === "Large"}
                aria-label="Size Large"
                required
            />
            Large
        </label>
        </form>
        </section>
    );
};

//Add images in buttons
//Add div classname for img or checkbox 