import React from 'react';

export const Drink = ({ drink, setDrink }) => {
  const handleDrinkChange = (event) => {
    setDrink(event.target.value);
  }
  return (
    <div classname="question-container">
      <p>And what do you wanna drink on this special day?</p>
      <div classname="select-container">
        <select
          classname="select"
          id="drink"
          value={drink} 
          onChange={handleDrinkChange} >
          <option value="">Select drink</option>
          <option value="Coffee">Coffee for sure!</option>
          <option value="Drinks">Umbrella drinks in rainbow colors!</option>
          <option value="Soda">Sparkling soda in a large glas!</option>
          <option value="Smoothie">Smoothie with a straw</option>
        </select>
      </div>
    </div>
  )
}