import React from 'react'

const DessertInput = ({ dessert, setDessert }) => {

     const handleDessertChange = event => {
        setDessert(event.target.value);
    }
    console.log(dessert);

    const dessertArray = ['Ice Cream', 'Chocolate Cake', 'Tiramisu', 'Strawberry Cake']

    return (
        <div className="question-wrapper">
            {dessertArray.map((desserts) => (
                <label htmlFor="dessert" key={desserts} className="radio-label">
                    <input
                        className="radio-buttons"
                        type="radio"
                        id={desserts}
                        value={desserts}
                        name="dessert-input"
                        onChange={handleDessertChange}
                        checked={dessert === desserts}
                        required
                    />
                    {desserts}
                   </label>       
            ))}

        </div>
    )
}

export default DessertInput;