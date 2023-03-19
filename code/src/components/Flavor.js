/* eslint-disable */
import React from 'react';

export const Flavor = ({ flavor, setFlavor }) => {
    const handleFlavorChange = (event) => {
        setFlavor(event.target.value);
    }

    return (
        <form onSubmit={event => event.preventDefault()}>
            <select
                onChange={handleFlavorChange}
                value={flavor}
                aria-label="Choose what flavor you would like"
            >
                <option value="" disabled="disabled">Choose flavor</option>
                <option value="sweet">Sweet</option>
                <option value="salty">Salty</option>
                <option value="sweet and salty">Sweet &amp; Salty</option>
            </select>
        </form>
    );
};