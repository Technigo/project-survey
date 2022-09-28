import React from 'react';

const answers = ['Yes', 'No']

export const BikeFour = ({ bike, setBike }) => {
  const handleBikeChange = (event) => {
    setBike(event.target.value);
  }
  return (
    <form>
      <p>Do you have access to a bike?</p>
      {answers.map((yesno) => (
        <>
          <label htmlFor="ownBike" key={yesno}> {yesno} </label>
          <input
            id="ownBike"
            type="radio"
            onChange={handleBikeChange}
            Value={yesno}
            checked={bike === yesno} />
        </>
      ))}
    </form>
  );
};