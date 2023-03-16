import React from 'react';

export const Drink = ({ drink, setDrink }) => {
  const handleDrinkChange = (event) => {
    setDrink(event.target.value);
  }
  return (
    <>
    <div className="question">
      <p>Sounds delicious!</p>
      <p>And something to drink?</p>
      </div>
      <div className="select-container">
        <select
          className="select"
          id="drink"
          value={drink} 
          onChange={handleDrinkChange} >
          <option value="">Menu</option>
          <option value="a great cop of coffee">Coffee!☕️</option>
          <option value="one rainbow colored drink">Tropical drinks!🍹</option>
          <option value="sparkling icecold soda in a large glass">Sparkling soda!🥤</option>
          <option value="a fruity and fluffy smoothie">Smoothie!🍓</option>
        </select>
      </div>
    </>
  )
}