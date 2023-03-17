import React from 'react';

/* this makes the drink component accept the props drink and setDrink using object destructuring */
export const Drink = ({ drink, setDrink }) => {
  const handleDrinkChange = (event) => {
    setDrink(event.target.value);
  }
  return (
    <div className="content-wrapper">
      <p>What is your favourite drink?</p>
      <input type="text" value={drink} onChange={handleDrinkChange} />{/*  <input/> will have the value of the drink from props and an onChange handler that will be handleDrinkChange */}
    </div>
  );
}

