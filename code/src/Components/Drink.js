import React from 'react';

export const Drink = ({ drink, setDrink }) => {
  const handleDrinkChange = (event) => {
    setDrink(event.target.value);
  }
  return (
    <>
      <p>At last, what do you like to drink with your breakfast</p>
      <div>
        <input type="radio" value="Coffee" onChange={handleDrinkChange} checked={drink === 'Coffee'} /> Coffee
        <input type="radio" value="Fresh OJ" onChange={handleDrinkChange} checked={drink === 'Fresh OJ'} /> Fresh OJ
        <input type="radio" value="Tea" onChange={handleDrinkChange} checked={drink === 'Tea'} /> Tea
        <input type="radio" value="Water" onChange={handleDrinkChange} checked={drink === 'Water'} /> Water
      </div>
    </>
  );
}