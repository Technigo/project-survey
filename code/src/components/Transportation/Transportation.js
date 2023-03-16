import React from 'react';
import './Transportation.css';

export const Transportation = ({ transportation, setTransportation }) => {
  const handleTransportationChange = (event) => {
    console.log(event.target.value);
    setTransportation(event.target.value);
  };
  return (
    <>
      <p>Which transportation option will you choose to reach the lodge?</p>
      <label htmlFor="taxi">
        <input
          type="radio"
          id="taxi"
          name="transportation"
          value="taxi"
          checked={transportation === 'taxi'}
          onChange={handleTransportationChange}
          required />
        Taxi
      </label>

      <label htmlFor="shuttle">
        <input
          type="radio"
          id="shuttle"
          name="transportation"
          checked={transportation === 'shuttle'}
          value="shuttle"
          onChange={handleTransportationChange}
          required />
        Hotel shuttle
      </label>

      <label htmlFor="car">
        <input
          type="radio"
          id="car"
          name="transportation"
          checked={transportation === 'car'}
          value="car"
          onChange={handleTransportationChange}
          required />
        Car
      </label>
    </>
  );
};

