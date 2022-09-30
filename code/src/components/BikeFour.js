import React from 'react';
// Radio buttons, I use array and .map insted of writing code for every button
const answers = ['Yes', 'No']

export const BikeFour = ({ bike, setBike }) => {
  const handleBikeChange = (event) => {
    setBike(event.target.value);
  }
  return (
    <form>
      <h2>Do you have access to a bike?</h2>
      {answers.map((yesno) => (
        <div className="inputClass">
          <label htmlFor="ownBike" key={yesno}> {yesno} </label>
          <input
            id="ownBike"
            type="radio"
            onChange={handleBikeChange}
            Value={yesno}
            checked={bike === yesno} />
        </div>
      ))}
    </form>
  );
};