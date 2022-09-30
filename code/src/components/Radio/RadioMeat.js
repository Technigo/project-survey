import React from 'react';

const RadioMeat = ({ meat, setMeat }) => {
  const handleMeatChange = (event) => {
    setMeat(event.target.value);
  }
  return (
    <div className="radio-buttons-meat">
      <label htmlFor="RadioButton">
        <input
          type="radio"
          value="Pork"
          onChange={handleMeatChange}
          checked={meat === 'Pork'} /> Pork

        <input
          type="radio"
          value="Chicken"
          onChange={handleMeatChange}
          checked={meat === 'Chicken'} /> Chicken

        <input
          type="radio"
          value="Beef"
          onChange={handleMeatChange}
          checked={meat === 'Beef'} /> Beef
      </label>
    </div>
  );
}

export default RadioMeat;