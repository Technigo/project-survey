import React from 'react';

export const Drink = ({ drink, setDrink }) => {
  const handleDrinkChange = (event) => {
    setDrink(event.target.value);
  }
  return (
    <>
      <div className="question">
        <h2>Sounds delicious! 
            And drink?</h2>
      </div>
      <div className="select-container">
        <select
          className="select"
          id="drink"
          value={drink} 
          onChange={handleDrinkChange} >
          <option value="">Menu</option>
          <option value="a great cup of coffee">Coffee</option>
          <option value="one rainbow colored drink">Tropical drinks</option>
          <option value="sparkling ice cold soda">Sparkling soda</option>
          <option value="a fruity and fluffy smoothie">Smoothie</option>
          <option value="ice cold water">Water</option>
        </select>
      </div>
    </>
  )
}