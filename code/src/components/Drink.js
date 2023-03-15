import React from 'react';

export const Drink = ({ drink, setDrink }) => {
  const handleDrinkChange = (event) => {
    setDrink(event.target.value);
  }
  return (
    <>
    <div className="question">
      <p>And what do you wanna drink on this special day?</p>
      </div>
      <div className="select-container">
        <select
          className="select"
          id="drink"
          value={drink} 
          onChange={handleDrinkChange} >
          <option value="">Select drink</option>
          <option value="coffee">Coffee for sure!</option>
          <option value="rainbow colored drinks">Umbrella drinks in rainbow colors!</option>
          <option value="sparkling soda">Sparkling soda in a large glas!</option>
          <option value="smoothie">Smoothie with a straw</option>
        </select>
      </div>
    </>
  )
}