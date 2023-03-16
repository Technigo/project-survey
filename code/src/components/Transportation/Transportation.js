import React from 'react';
import './Transportation.css';

export const Transportation = ({ transportation, setTransportation }) => {
  const handleTransportationChange = (event) => {
    console.log(event.target.value);
    setTransportation(event.target.value);
  };
  return (
    <>
      <h2>What transportation method are you using to reach the lodge?</h2>
      <div className="radio-wrapper">
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
      </div>
    </>
  );
};

