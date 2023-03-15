import React from 'react';

export const Topping = ({ topping, setTopping }) => {
    const handleToppingChange = (event) => {
        setTopping(event.target.value);
    }

    return (
        <form>
            <label>
            Add pieces of chocolate to your popcorn?
            <input 
                type="radio"
                value="yes"
                label="Yaassss"
                onChange={handleToppingChange}
            />
            Yes
            </label>
            <label>
            <input
                type="radio"
                value="no"
                label="nope"
                onChange={handleToppingChange}
            />
            No
        </label>
        </form>
    );
}