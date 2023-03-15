import React from 'react'
import { RadioButton } from './Radiobutton';

export const Drink = ({ drink, setDrink }) => {
  const handleDrinkChange = (event) => {
    setDrink(event.target.value);
  }

  return (
    <>
      <p>What is your fave drink?</p>
      <input type="text" value={drink} onChange={handleDrinkChange} />
      <RadioButton />
      <RadioButton />
      <RadioButton />

    </>
  );
}

/* <p>What is your fave drink?</p>
      <label>
        Coffee
    <input type="radio" value="coffee" checked={drink === 'coffee'} onChange={handleDrinkChange} />
      </label>
      <label>
        <input type="radio" value="tea" checked={drink === 'tea'} onChange={handleDrinkChange} />
        Tea
      </label>
      <label>
        <input type="radio" value="soda" checked={drink === 'soda'} onChange={handleDrinkChange} />
        Water
      </label> */