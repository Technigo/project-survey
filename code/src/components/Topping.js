import React from 'react';

export const Topping = ({ topping, setTopping }) => {
    const handleToppingChange = (event) => {
        setTopping(event.target.value);
    }

    return (
        <form onSubmit={event => event.preventDefault()}>
            <label>
            Add pieces of chocolate to your popcorn?
            <input 
                type="radio"
                value="yes"
                onChange={handleToppingChange}
                checked={topping === "yes"}
                aria-label="Yes to chocolate topping"
            />
            Yes
            </label>
            <label>
            <input
                type="radio"
                value="no"
                onChange={handleToppingChange}
                checked={topping === "no"}
                aria-label="No to chocolate topping"
            />
            No
        </label>
        </form>
    );
}