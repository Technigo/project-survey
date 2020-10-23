import React from 'react'

const DessertInput = ({ userDessert, setUserDessert }) => {

     const handleDessertChange = event => {
        setUserDessert(event.target.value);
    }
    console.log(userDessert);

    const dessertArray = ['Ice Cream', 'Chocolate Cake', 'Tiramisu', 'Strawberry Cake']

    return (
        <div className="question-wrapper">
            {dessertArray.map((dessert) => (
                <label htmlFor="dessert" key={dessert}>
                    <input
                        type="radio"
                        id="dessertChoice"
                        value={dessert}
                        name="dessert-input"
                        className="radio-buttons"
                        onChange={handleDessertChange}
                        className="radio-button"
                        checked={userDessert === dessert}
                        required
                    />
                    {dessert}
                   </label>       
            ))}

        </div>
    )
}

export default DessertInput;