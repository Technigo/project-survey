import React from 'react';

const foodPreferences = ['pizza', 'pasta', 'burgers', 'sallad'];

export const Food = ({ food, setFood }) => {

    const handleFoodChange = (event) => {
        setFood(event.target.value);
        console.log('value is:', event.target.value);
    }

    return (
        <form>
            <p>What is your favourite food?</p>
            {foodPreferences.map((foodType) => (
                <label key={foodType}>
                    <input
                        type="radio"
                        onChange={handleFoodChange}
                        value={food}
                        defaultChecked={food === foodType}

                    />
                    {foodType}
                </label>
            ))}
        </form>
    )
}